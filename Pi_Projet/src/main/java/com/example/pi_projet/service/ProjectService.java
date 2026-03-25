package com.example.pi_projet.service;

import com.example.pi_projet.entity.Project;
import com.example.pi_projet.entity.Project.ProjectStatus;
import com.example.pi_projet.entity.Project.Visibility;
import com.example.pi_projet.entity.ProjectMember;
import com.example.pi_projet.entity.ProjectMember.ProjectRole;
import com.example.pi_projet.entity.ProjectTemplate;
import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.service.ProjectTemplateService;
import com.example.pi_projet.service.ProjectMemberService;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.repository.ProjectMemberRepository;
import com.example.pi_projet.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectService {
    private Project findOrThrow(UUID id) {
        return projectRepo.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Project not found: " + id));
    }

    private final ProjectRepository projectRepo;
    private final ProjectMemberRepository projectMemberRepo;
    private final WorkspaceService workspaceService;
    private final ProjectTemplateService templateService;
    private final com.example.pi_projet.repository.UserRepository userRepo;
    private final org.springframework.jdbc.core.JdbcTemplate jdbcTemplate;
    private final WorkspaceQuotaHelper quotaHelper;
    private final WorkspaceAuthHelper authHelper;
    private final M2AuditLogService auditLogService;

    public Page<Project> getVisible(UUID workspaceId, Long userId, Pageable pageable) {
        return projectRepo.findVisibleToUser(workspaceId, userId, pageable);
    }

    public Project getById(UUID projectId, Long requesterId) {
        Project p = findOrThrow(projectId);
        // requester must be project member
        if (!projectMemberRepo.existsByProjectIdAndUserId(projectId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Requester is not a project member");
        }
        return p;
    }

    @Transactional
    public Project create(UUID workspaceId, String name, String description,
                          Visibility visibility, LocalDate startDate, LocalDate endDate,
                          Long requesterId) {
        if (!userRepo.existsById(requesterId)) throw new Module2Exception(NOT_FOUND, "Creator user not found");
        Workspace ws = workspaceService.getById(workspaceId);
        // Requester must be active workspace member with admin/manager
        if (!authHelper.isWorkspaceAdminOrManager(workspaceId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only workspace admin or manager can create projects.");
        }

        // Quota check at org level
        java.util.UUID orgId = ws.getOrganization().getId();
        long current = quotaHelper.countActiveProjectsByOrg(orgId);
        int maxAllowed = quotaHelper.getMaxProjectsStub(orgId);
        if (current >= maxAllowed) {
            throw new Module2Exception(PAYMENT_REQUIRED, String.format("Project quota exceeded: %d/%d", current, maxAllowed));
        }

        Project p = Project.builder()
            .workspace(ws)
            .createdBy(requesterId)
            .name(name)
            .description(description)
            .visibility(visibility != null ? visibility : Visibility.PUBLIC)
            .startDate(startDate)
            .endDate(endDate)
            .build();
        p = projectRepo.save(p);
        // assign manager or professor based on org type stub
        // Note: ProjectRole enum does not include academic-specific roles in this module.
        ProjectRole assigned = ProjectRole.PROJECT_MANAGER;
        projectMemberRepo.save(ProjectMember.builder()
            .project(p).userId(requesterId).role(assigned).build());

        // audit log (via adapter)
        try {
            auditLogService.writeAudit(requesterId, orgId, "CREATE_PROJECT", "project", p.getId().toString(), null);
        } catch (Exception ignored) {}
        return p;
    }

    @Transactional
    public Project createProjectFromTemplate(UUID workspaceId, UUID templateId, String nameOverride, Long requesterId) {
        ProjectTemplate template = templateService.getById(templateId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
        if (template.getStatus() != ProjectTemplate.TemplateStatus.APPROVED) {
            throw new Module2Exception(FORBIDDEN, "Template must be APPROVED before use");
        }
        if (!userRepo.existsById(requesterId)) throw new Module2Exception(NOT_FOUND, "Creator user not found");
        Workspace ws = workspaceService.getById(workspaceId);
        Project p = Project.builder()
            .workspace(ws)
            .templateId(template.getId())
            .createdBy(requesterId)
            .name(nameOverride != null ? nameOverride : template.getName())
            .description(template.getUseCaseDescription())
            .visibility(template.getDefaultVisibility() == ProjectTemplate.DefaultVisibility.PUBLIC ? Visibility.PUBLIC : Visibility.PRIVATE)
            .build();
        p = projectRepo.save(p);
        projectMemberRepo.save(ProjectMember.builder()
            .project(p).userId(requesterId).role(ProjectRole.PROJECT_MANAGER).build());
        // increment usage
        template.setUsageCount(template.getUsageCount() + 1);
        templateService.saveTemplate(template); // persist usage increment
        return p;
    }

    @Transactional
    public Project assignMemberToProject(UUID projectId, Long userId, ProjectRole role, Long assignedBy) {
        Project project = findOrThrow(projectId);
        // member must exist in workspace
        if (!userRepo.existsById(userId)) throw new Module2Exception(NOT_FOUND, "User to assign not found");
        if (!workspaceService.isMember(project.getWorkspace().getId(), userId)) {
            throw new Module2Exception(BAD_REQUEST, "User is not a member of the project's workspace");
        }
        if (projectMemberRepo.existsByProjectIdAndUserId(projectId, userId)) {
            throw new Module2Exception(CONFLICT, "User already assigned to project");
        }
        var assigner = userRepo.findById(assignedBy).orElseThrow(() -> new Module2Exception(NOT_FOUND, "Assigner user not found"));

        // check assigner permissions: project manager/professor or workspace admin
        boolean allowed = false;
        try {
            var prOpt = projectMemberRepo.findByProjectIdAndUserId(projectId, assignedBy);
            if (prOpt.isPresent()) {
                var pr = prOpt.get();
                if (pr.getRole() == ProjectRole.PROJECT_MANAGER || pr.getRole() == ProjectRole.PROFESSOR) allowed = true;
            }
        } catch (Exception ignored) {}
        if (!allowed && !authHelper.isWorkspaceAdminOrManager(project.getWorkspace().getId(), assignedBy)) {
            throw new Module2Exception(FORBIDDEN, "Requester lacks permission to add project members");
        }
        
        ProjectMember pm = ProjectMember.builder()
            .project(project).userId(userId).role(role).assignedByUser(assigner).build();
        pm = projectMemberRepo.save(pm);
        return project;
    }

    @Transactional
    public Project update(UUID projectId, String name, String description,
                          Visibility visibility, LocalDate startDate, LocalDate endDate,
                          Long requesterId) {
        Project p = findOrThrow(projectId);
        if (name != null)        p.setName(name);
        if (description != null) p.setDescription(description);
        if (visibility != null)  p.setVisibility(visibility);
        if (startDate != null)   p.setStartDate(startDate);
        if (endDate != null)     p.setEndDate(endDate);
        return projectRepo.save(p);
    }

    @Transactional
    public Project changeStatus(UUID projectId, ProjectStatus status, Long requesterId) {
        Project p = findOrThrow(projectId);

        // permission: project manager/professor or workspace admin
        boolean allowed = false;
        var pmOpt = projectMemberRepo.findByProjectIdAndUserId(projectId, requesterId);
        if (pmOpt.isPresent()) {
            var pm = pmOpt.get();
            if (pm.getRole() == ProjectRole.PROJECT_MANAGER || pm.getRole() == ProjectRole.PROFESSOR) allowed = true;
        }
        if (!allowed && !authHelper.isWorkspaceAdminOrManager(p.getWorkspace().getId(), requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Not allowed to change project status");
        }

        // validate transition
        java.util.Map<ProjectStatus, java.util.List<ProjectStatus>> VALID_TRANSITIONS = java.util.Map.of(
            ProjectStatus.PLANNING, java.util.List.of(ProjectStatus.ACTIVE),
            ProjectStatus.ACTIVE, java.util.List.of(ProjectStatus.ON_HOLD, ProjectStatus.COMPLETED),
            ProjectStatus.ON_HOLD, java.util.List.of(ProjectStatus.ACTIVE),
            ProjectStatus.COMPLETED, java.util.List.of(ProjectStatus.ARCHIVED),
            ProjectStatus.ARCHIVED, java.util.List.of()
        );

        var allowedTo = VALID_TRANSITIONS.getOrDefault(p.getStatus(), java.util.List.of());
        if (!allowedTo.contains(status)) {
            throw new Module2Exception(BAD_REQUEST, String.format("Invalid status transition from %s to %s.", p.getStatus(), status));
        }

        p.setStatus(status);
        return projectRepo.save(p);
    }

    @Transactional
    public void delete(UUID projectId, Long requesterId) {
        Project p = findOrThrow(projectId);
        // only workspace admin or project manager can archive
        boolean allowed = false;
        var pmOpt = projectMemberRepo.findByProjectIdAndUserId(projectId, requesterId);
        if (pmOpt.isPresent()) {
            var pm = pmOpt.get();
            if (pm.getRole() == ProjectRole.PROJECT_MANAGER || pm.getRole() == ProjectRole.PROFESSOR) allowed = true;
        }
        if (!allowed && !authHelper.isWorkspaceAdminOrManager(p.getWorkspace().getId(), requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Not allowed to delete/archive project");
        }
        p.setStatus(ProjectStatus.ARCHIVED);
        projectRepo.save(p);
    }

    // No access checks for static demo
    private void checkAccess(Project p, Long userId) {
        // No-op
    }

    public void requireProjectRole(UUID projectId, Long userId, ProjectRole... allowed) {
        // No-op for static demo
    }
}
