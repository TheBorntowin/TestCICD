package com.example.pi_projet.service;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;

import com.example.pi_projet.repository.WorkspaceMemberRepository;
import com.example.pi_projet.repository.WorkspaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.jdbc.core.JdbcTemplate;
import lombok.extern.slf4j.Slf4j;
import com.example.pi_projet.entity.Organization;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.util.StringUtils;
import java.time.Instant;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class WorkspaceService {

    private final WorkspaceRepository workspaceRepo;
    private final WorkspaceMemberRepository memberRepo;
    private final com.example.pi_projet.repository.UserRepository userRepo;
    private final JdbcTemplate jdbcTemplate;
    private final WorkspaceAuthHelper authHelper;
    private final WorkspaceQuotaHelper quotaHelper;
    private final M2AuditLogService auditLogService;

    @PersistenceContext
    private EntityManager em;

    public List<Workspace> getByMember(Long userId) {
        return workspaceRepo.findAllByMemberUserId(userId);
    }

    public Workspace getById(UUID id) {
        return workspaceRepo.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Workspace not found: " + id));
    }

    @Transactional
    public Workspace createWorkspace(UUID orgId, String name, String slug, Long currentUserId, String ipAddress) {
        if (!userRepo.existsById(currentUserId)) throw new Module2Exception(NOT_FOUND, "Requester user not found");

        // Authorization: only org_admin or academic_admin can create
        if (!authHelper.isOrgAdmin(orgId, currentUserId)) {
            throw new Module2Exception(FORBIDDEN, "Only org_admin or academic_admin can create workspaces.");
        }

        // Quota check
        long currentCount = quotaHelper.countActiveWorkspaces(orgId);
        int maxAllowed = quotaHelper.getMaxWorkspacesStub(orgId);
        if (currentCount >= maxAllowed) {
            throw new Module2Exception(PAYMENT_REQUIRED, String.format("Workspace quota exceeded: %d/%d", currentCount, maxAllowed));
        }

        // Slug uniqueness within org
        Long slugCount = jdbcTemplate.queryForObject(
            "SELECT COUNT(*) FROM workspaces WHERE organization_id = ? AND slug = ? AND deleted_at IS NULL",
            Long.class, orgId.toString(), slug);
        if (slugCount != null && slugCount > 0) throw new Module2Exception(CONFLICT, "Workspace slug already exists for this organization");

        Workspace ws = Workspace.builder()
                .id(UUID.randomUUID())
                .name(name)
                .slug(slug)
                .ownerId(currentUserId)
                .build();

        // Attach organization reference without loading entity fully
        Organization orgRef = em.getReference(Organization.class, orgId);
        ws.setOrganization(orgRef);

        ws = workspaceRepo.save(ws);

        WorkspaceMember ownerMember = WorkspaceMember.builder()
            .workspace(ws).userId(currentUserId).role(WorkspaceRole.OWNER).invitedByUser(null).joinedAt(Instant.now()).build();
        memberRepo.save(ownerMember);

        // audit log inline
        writeAuditLog(currentUserId, orgId, "CREATE_WORKSPACE", "workspace", ws.getId().toString(), ipAddress);

        return ws;
    }

    @Transactional
    public Workspace update(UUID id, String name, Long requesterId) {
        Workspace ws = getById(id);
        // only workspace admin or org_admin can update
        UUID orgId = ws.getOrganization().getId();
        String role = authHelper.getWorkspaceRole(id, requesterId);
        if (!"admin".equals(role) && !authHelper.isOrgAdmin(orgId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only workspace admin or org_admin can update workspace");
        }
        ws.setName(name);
        return workspaceRepo.save(ws);
    }

    @Transactional
    public void delete(UUID id, Long requesterId) {
        Workspace ws = getById(id);
        UUID orgId = ws.getOrganization().getId();
        if (!authHelper.isOrgAdmin(orgId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only org_admin can delete workspace");
        }
        // soft-delete
        workspaceRepo.delete(ws);
    }

    @Transactional
    public WorkspaceMember addMember(UUID workspaceId, Long targetUserId, WorkspaceRole requestedRole, Long requesterId, String ipAddress) {
        Workspace ws = getById(workspaceId);
        if (!userRepo.existsById(targetUserId)) throw new Module2Exception(NOT_FOUND, "User to invite not found");
        if (!userRepo.existsById(requesterId)) throw new Module2Exception(NOT_FOUND, "Requester user not found");

        // Requester must be admin or manager in workspace
        if (!authHelper.isWorkspaceAdminOrManager(workspaceId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only workspace admin or manager can add members.");
        }

        // Target user must be member of the organization
        UUID orgId = ws.getOrganization().getId();
        try {
            String targetOrgRole = jdbcTemplate.queryForObject(
                "SELECT org_role FROM org_members WHERE org_id = ? AND user_id = ?",
                String.class, orgId.toString(), targetUserId);
            if (!StringUtils.hasText(targetOrgRole)) throw new Module2Exception(NOT_FOUND, "User is not a member of this organization.");

            // Not already in workspace
            if (memberRepo.existsByWorkspaceIdAndUserId(workspaceId, targetUserId)) {
                throw new Module2Exception(CONFLICT, "User already active in workspace");
            }

            // Role assignment based on org type (static stub)
            String orgType = quotaHelper.getOrgTypeStub(orgId);
            String assignedRoleName;
            if ("academic".equalsIgnoreCase(orgType)) {
                switch (targetOrgRole) {
                    case "professor": assignedRoleName = "manager"; break;
                    case "student": assignedRoleName = "employee"; break;
                    default: assignedRoleName = requestedRole.name().toLowerCase(); break;
                }
            } else {
                // enterprise: cannot assign admin via this endpoint
                if ("admin".equalsIgnoreCase(requestedRole.name())) {
                    throw new Module2Exception(FORBIDDEN, "Cannot assign admin role via this endpoint.");
                }
                assignedRoleName = requestedRole.name().toLowerCase();
            }

            // Convert assignedRoleName to enum if possible, else default to EMPLOYEE
            WorkspaceRole finalRole = WorkspaceRole.valueOf(assignedRoleName.toUpperCase());

            var inviter = userRepo.findById(requesterId).orElseThrow(() -> new Module2Exception(NOT_FOUND, "Requester user not found"));
            WorkspaceMember m = WorkspaceMember.builder()
                    .workspace(ws).userId(targetUserId).role(finalRole).invitedByUser(inviter).joinedAt(Instant.now()).build();
            var saved = memberRepo.save(m);

            writeAuditLog(requesterId, orgId, "ADD_WORKSPACE_MEMBER", "workspace_member", saved.getId().toString(), ipAddress);
            return saved;
        } catch (EmptyResultDataAccessException ex) {
            throw new Module2Exception(NOT_FOUND, "User is not a member of this organization.");
        }
    }

    @Transactional
    public void removeMember(UUID workspaceId, Long userId, Long requesterId) {
        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Workspace member not found"));
        memberRepo.delete(m);
    }

    // ── auth helpers used by all services ────────────────────

    public void requireRole(UUID workspaceId, Long userId, WorkspaceRole... allowed) {
        // TODO: implement role checks integrating with security layer
    }

    public boolean isMember(UUID workspaceId, Long userId) {
        return memberRepo.existsByWorkspaceIdAndUserId(workspaceId, userId);
    }

    private void writeAuditLog(Long userId, UUID orgId, String actionType, String entityType, String entityId, String ipAddress) {
        // Delegate to adapter which can be swapped for Module 1's AuditLogService later
        try {
            auditLogService.writeAudit(userId, orgId, actionType, entityType, entityId, ipAddress);
        } catch (Exception e) {
            log.warn("Audit write failed: {}", e.getMessage());
        }
    }
}
