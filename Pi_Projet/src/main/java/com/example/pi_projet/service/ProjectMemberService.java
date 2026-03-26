package com.example.pi_projet.service;

import com.example.pi_projet.entity.ProjectMember;
import com.example.pi_projet.entity.ProjectMember.ProjectRole;
import com.example.pi_projet.entity.User;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.ProjectMemberRepository;
import com.example.pi_projet.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectMemberService {

    private final ProjectMemberRepository memberRepo;
    private final ProjectRepository projectRepo;
    private final WorkspaceService workspaceService;
    private final ProjectService projectService;
    private final com.example.pi_projet.repository.UserRepository userRepo;
    private final WorkspaceAuthHelper authHelper;

    public List<ProjectMember> getAll(UUID projectId, Long requesterId) {
        var project = projectRepo.findById(projectId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Project not found"));

        boolean allowed = memberRepo.existsByProjectIdAndUserId(projectId, requesterId)
            || authHelper.isWorkspaceAdminOrManager(project.getWorkspace().getId(), requesterId)
            || isGlobalAdmin(requesterId);
        if (!allowed) {
            throw new Module2Exception(FORBIDDEN, "Requester lacks permission to view project members");
        }

        return memberRepo.findAllByProjectId(projectId);
    }

    @Transactional
    public ProjectMember add(UUID projectId, Long userId, ProjectRole role, Long requesterId) {
        // delegate to ProjectService which enforces permissions, workspace membership and auditing
        projectService.assignMemberToProject(projectId, userId, role, requesterId);
        return memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found after assignment"));
    }

    @Transactional
    public ProjectMember updateRole(UUID projectId, Long userId, ProjectRole newRole, Long requesterId) {
        var project = projectRepo.findById(projectId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Project not found"));
        if (!canManageProjectMembers(projectId, project.getWorkspace().getId(), requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Requester lacks permission to update project member role");
        }

        ProjectMember m = memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        m.setRole(newRole);
        return memberRepo.save(m);
    }

    @Transactional
    public void remove(UUID projectId, Long userId, Long requesterId) {
        var project = projectRepo.findById(projectId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Project not found"));
        if (!canManageProjectMembers(projectId, project.getWorkspace().getId(), requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Requester lacks permission to remove project member");
        }

        ProjectMember m = memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        memberRepo.delete(m);
    }

    private boolean canManageProjectMembers(UUID projectId, UUID workspaceId, Long requesterId) {
        var requesterMembership = memberRepo.findByProjectIdAndUserId(projectId, requesterId);
        boolean isProjectManager = requesterMembership.isPresent()
            && (requesterMembership.get().getRole() == ProjectRole.PROJECT_MANAGER
                || requesterMembership.get().getRole() == ProjectRole.PROFESSOR);

        return isProjectManager
            || authHelper.isWorkspaceAdminOrManager(workspaceId, requesterId)
            || isGlobalAdmin(requesterId);
    }

    private boolean isGlobalAdmin(Long userId) {
        return userRepo.findById(userId)
            .map(User::getRole)
            .map(role -> role == User.RoleName.SUPER_ADMIN || role == User.RoleName.ADMIN)
            .orElse(false);
    }
}
