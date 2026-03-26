package com.example.pi_projet.service;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.entity.User;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;

import com.example.pi_projet.repository.WorkspaceMemberRepository;
import com.example.pi_projet.repository.WorkspaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.jdbc.core.JdbcTemplate;
import lombok.extern.slf4j.Slf4j;
import com.example.pi_projet.entity.Organization;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.util.StringUtils;
import java.time.Instant;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class WorkspaceService {

    private static final String ORG_ROLE_ORG_ADMIN = "org_admin";
    private static final String ORG_ROLE_ACADEMIC_ADMIN = "academic_admin";
    private static final String ORG_ROLE_ADMIN = "admin";
    private static final String ORG_ROLE_OWNER = "owner";

    private final WorkspaceRepository workspaceRepo;
    private final WorkspaceMemberRepository memberRepo;
    private final com.example.pi_projet.repository.UserRepository userRepo;
    private final JdbcTemplate jdbcTemplate;
    private final WorkspaceAuthHelper authHelper;
    private final WorkspaceQuotaHelper quotaHelper;
    private final M2AuditLogService auditLogService;

    @PersistenceContext
    private EntityManager em;

    public List<Workspace> getVisibleForUser(User currentUser) {
        if (currentUser == null || currentUser.getId() == null) {
            throw new Module2Exception(FORBIDDEN, "Missing authenticated user context");
        }

        Long userId = currentUser.getId();
        if (isGlobalAdminRole(currentUser.getRole())) {
            return workspaceRepo.findAll();
        }

        OrgMembershipContext membership = resolveSingleOrganizationMembership(userId);
        return workspaceRepo.findAllByMemberUserIdAndOrganizationId(userId, membership.orgId());
    }

    public Workspace getById(UUID id) {
        return workspaceRepo.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Workspace not found: " + id));
    }

    @Transactional
    public Workspace createWorkspaceForCurrentUser(User currentUser, String name, String slug, UUID requestedOrgId) {
        if (currentUser == null || currentUser.getId() == null) {
            throw new Module2Exception(FORBIDDEN, "Missing authenticated user context");
        }

        Long currentUserId = currentUser.getId();
        if (!userRepo.existsById(currentUserId)) {
            throw new Module2Exception(NOT_FOUND, "Requester user not found");
        }

        String finalName = StringUtils.trimWhitespace(name);
        if (!StringUtils.hasText(finalName)) {
            throw new Module2Exception(VALIDATION, "Workspace name is required");
        }

        String normalizedSlug = normalizeSlug(slug);
        if (!StringUtils.hasText(normalizedSlug)) {
            normalizedSlug = normalizeSlug(finalName);
        }
        if (!StringUtils.hasText(normalizedSlug)) {
            throw new Module2Exception(VALIDATION, "Workspace slug is required");
        }

        UUID orgId = resolveTargetOrganizationIdForCreate(currentUser, requestedOrgId);
        String orgType = quotaHelper.getOrgTypeStub(orgId);

        if (!isGlobalAdminRole(currentUser.getRole())) {
            OrgMembershipContext membership = resolveSingleOrganizationMembership(currentUser.getId());
            boolean hasOrganizationCreateRole = canCreateWorkspaceByOrgRole(membership.orgRole());
            boolean tutorInAcademicOrg = isTutorInAcademicOrganization(currentUser, orgType);
            if (!hasOrganizationCreateRole && !tutorInAcademicOrg) {
                throw new Module2Exception(FORBIDDEN, "Only org admin, owner, or academic tutor can create workspaces.");
            }
        }

        long currentCount = quotaHelper.countActiveWorkspaces(orgId);
        int maxAllowed = quotaHelper.getMaxWorkspacesStub(orgId);
        if (currentCount >= maxAllowed) {
            throw new Module2Exception(FORBIDDEN, "Workspace limit reached for your plan");
        }

        if (workspaceRepo.existsBySlugAndOrganizationId(normalizedSlug, orgId)) {
            throw new Module2Exception(CONFLICT, "Workspace slug already exists for this organization");
        }

        Workspace ws = Workspace.builder()
            .id(UUID.nameUUIDFromBytes((orgId + ":" + normalizedSlug).getBytes(StandardCharsets.UTF_8)))
            .name(finalName)
            .slug(normalizedSlug)
            .ownerId(currentUserId)
            .orgType(orgType)
            .build();

        Organization orgRef = em.getReference(Organization.class, orgId);
        ws.setOrganization(orgRef);

        ws = workspaceRepo.save(ws);

        WorkspaceMember ownerMember = WorkspaceMember.builder()
            .workspace(ws)
            .userId(currentUserId)
            .role(WorkspaceRole.OWNER)
            .roleId(resolveRoleId("OWNER", "org_admin", "academic_admin", "professor"))
            .invitedByUser(null)
            .joinedAt(Instant.now())
            .build();
        memberRepo.save(ownerMember);

        writeAuditLog(currentUserId, orgId, "CREATE_WORKSPACE", "workspace", ws.getId().toString(), null);
        return ws;
    }

    @Transactional
    public Workspace update(UUID id, String name, Long requesterId) {
        Workspace ws = getById(id);
        // only workspace admin or org_admin can update
        UUID orgId = ws.getOrganization().getId();
        if (!authHelper.isWorkspaceAdminOrManager(id, requesterId) && !authHelper.isOrgAdmin(orgId, requesterId)) {
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
        User targetUser = userRepo.findById(targetUserId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "User to invite not found"));
        if (!userRepo.existsById(requesterId)) throw new Module2Exception(NOT_FOUND, "Requester user not found");

        // Target user must be member of the organization
        UUID orgId = ws.getOrganization().getId();
        try {
            if (!authHelper.isWorkspaceOwnerOrAdmin(workspaceId, requesterId) && !authHelper.isOrgAdmin(orgId, requesterId)) {
                throw new Module2Exception(FORBIDDEN, "Only org admin, workspace owner, or workspace admin can invite members.");
            }

            String targetOrgRole = resolveOrganizationRole(orgId, targetUserId);
            if (!StringUtils.hasText(targetOrgRole)) {
                throw new Module2Exception(NOT_FOUND, "User is not a member of this organization.");
            }

            // Not already in workspace
            if (memberRepo.existsByWorkspaceIdAndUserId(workspaceId, targetUserId)) {
                throw new Module2Exception(CONFLICT, "User already active in workspace");
            }

            // Role assignment based on org type and target user role.
            String orgType = quotaHelper.getOrgTypeStub(orgId);
            WorkspaceRole finalRole = resolveWorkspaceRoleForInvite(orgType, targetUser.getRole(), requestedRole);

            var inviter = userRepo.findById(requesterId).orElseThrow(() -> new Module2Exception(NOT_FOUND, "Requester user not found"));
            WorkspaceMember m = WorkspaceMember.builder()
                    .workspace(ws)
                    .userId(targetUserId)
                    .role(finalRole)
                    .roleId(resolveRoleId(finalRole.name(), targetOrgRole, targetUser.getRole() != null ? targetUser.getRole().name() : null))
                    .invitedByUser(inviter)
                    .joinedAt(Instant.now())
                    .build();
            var saved = memberRepo.save(m);

            writeAuditLog(requesterId, orgId, "ADD_WORKSPACE_MEMBER", "workspace_member", saved.getId().toString(), ipAddress);
            return saved;
        } catch (EmptyResultDataAccessException ex) {
            throw new Module2Exception(NOT_FOUND, "User is not a member of this organization.");
        }
    }

    @Transactional
    public void removeMember(UUID workspaceId, Long userId, Long requesterId) {
        Workspace workspace = getById(workspaceId);
        UUID orgId = workspace.getOrganization().getId();
        if (!authHelper.isWorkspaceOwnerOrAdmin(workspaceId, requesterId) && !authHelper.isOrgAdmin(orgId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only org admin, workspace owner, or workspace admin can remove members.");
        }

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

    private OrgMembershipContext resolveSingleOrganizationMembership(Long userId) {
        List<Map<String, Object>> rows = queryOrgMembershipRows(userId);

        if (rows.isEmpty()) {
            throw new Module2Exception(FORBIDDEN, "Authenticated user is not a member of any organization");
        }
        if (rows.size() > 1) {
            throw new Module2Exception(FORBIDDEN, "Authenticated user belongs to multiple organizations, exactly one is required");
        }

        Map<String, Object> row = rows.get(0);
        Object orgIdValue = row.get("org_id");
        Object orgRoleValue = row.get("org_role");
        if (orgIdValue == null || orgRoleValue == null) {
            throw new Module2Exception(INTERNAL, "Organization membership row is incomplete");
        }

        UUID orgId = parseUuidValue(orgIdValue);
        String orgRole = orgRoleValue.toString().toLowerCase(Locale.ROOT);
        return new OrgMembershipContext(orgId, orgRole);
    }

    private List<Map<String, Object>> queryOrgMembershipRows(Long userId) {
        try {
            return jdbcTemplate.queryForList(
                "SELECT organization_id AS org_id, role AS org_role FROM org_members WHERE user_id = ? AND deleted_at IS NULL",
                userId
            );
        } catch (Exception primaryQueryFailure) {
            return jdbcTemplate.queryForList(
                "SELECT org_id, org_role FROM org_members WHERE user_id = ? AND deleted_at IS NULL",
                userId
            );
        }
    }

    private String resolveOrganizationRole(UUID orgId, Long userId) {
        try {
            return jdbcTemplate.queryForObject(
                "SELECT role FROM org_members WHERE organization_id = ? AND user_id = ? AND deleted_at IS NULL",
                String.class,
                orgId.toString(),
                userId
            );
        } catch (Exception primaryQueryFailure) {
            return jdbcTemplate.queryForObject(
                "SELECT org_role FROM org_members WHERE org_id = ? AND user_id = ? AND deleted_at IS NULL",
                String.class,
                orgId.toString(),
                userId
            );
        }
    }

    private boolean isOrganizationWideRole(String orgRole) {
        if (orgRole == null) {
            return false;
        }
        String normalized = orgRole.toLowerCase(Locale.ROOT);
        return ORG_ROLE_ORG_ADMIN.equals(normalized)
            || ORG_ROLE_ACADEMIC_ADMIN.equals(normalized)
            || ORG_ROLE_ADMIN.equals(normalized)
            || ORG_ROLE_OWNER.equals(normalized);
    }

    private boolean isGlobalAdminRole(User.RoleName role) {
        return role == User.RoleName.SUPER_ADMIN || role == User.RoleName.ADMIN;
    }

    private boolean canCreateWorkspaceByOrgRole(String orgRole) {
        if (orgRole == null) {
            return false;
        }
        String normalized = orgRole.toLowerCase(Locale.ROOT);
        return ORG_ROLE_ORG_ADMIN.equals(normalized)
            || ORG_ROLE_ACADEMIC_ADMIN.equals(normalized)
            || ORG_ROLE_OWNER.equals(normalized)
            || ORG_ROLE_ADMIN.equals(normalized);
    }

    private boolean isTutorInAcademicOrganization(User currentUser, String orgType) {
        return "academic".equalsIgnoreCase(orgType) && currentUser.getRole() == User.RoleName.TUTOR;
    }

    public boolean isGlobalAdmin(User currentUser) {
        return currentUser != null && isGlobalAdminRole(currentUser.getRole());
    }

    private UUID resolveTargetOrganizationIdForCreate(User currentUser, UUID requestedOrgId) {
        User.RoleName role = currentUser.getRole();

        if (isGlobalAdminRole(role)) {
            if (requestedOrgId != null) {
                ensureOrganizationExists(requestedOrgId);
                return requestedOrgId;
            }

            try {
                return resolveSingleOrganizationMembership(currentUser.getId()).orgId();
            } catch (Module2Exception ex) {
                return resolveAnyOrganizationIdForGlobalAdmin();
            }
        }

        OrgMembershipContext membership = resolveSingleOrganizationMembership(currentUser.getId());
        UUID membershipOrgId = membership.orgId();
        if (requestedOrgId != null && !requestedOrgId.equals(membershipOrgId)) {
            throw new Module2Exception(FORBIDDEN, "You can create workspaces only inside your organization");
        }
        return membershipOrgId;
    }

    @Transactional
    public Workspace ensureDefaultWorkspaceForOrganization(UUID orgId, Long ownerUserId, String orgType) {
        String normalizedOrgType = StringUtils.hasText(orgType) ? orgType.trim().toLowerCase(Locale.ROOT) : "enterprise";
        String defaultName = "academic".equalsIgnoreCase(normalizedOrgType) ? "Default Course" : "Default Team";
        String defaultSlug = normalizeSlug(defaultName);

        List<Workspace> existing = workspaceRepo.findAllByOrganizationId(orgId);
        if (!existing.isEmpty()) {
            Workspace candidate = existing.get(0);
            boolean changed = false;

            boolean looksLikeSystemDefault = existing.size() == 1 && (
                "default-team".equalsIgnoreCase(candidate.getSlug())
                    || "default-course".equalsIgnoreCase(candidate.getSlug())
                    || "Default Team".equalsIgnoreCase(candidate.getName())
                    || "Default Course".equalsIgnoreCase(candidate.getName())
            );

            if (looksLikeSystemDefault && !defaultName.equals(candidate.getName())) {
                candidate.setName(defaultName);
                changed = true;
            }
            if (looksLikeSystemDefault && !defaultSlug.equals(candidate.getSlug())) {
                candidate.setSlug(defaultSlug);
                changed = true;
            }
            if (!normalizedOrgType.equalsIgnoreCase(candidate.getOrgType())) {
                candidate.setOrgType(normalizedOrgType);
                changed = true;
            }

            Workspace saved = changed ? workspaceRepo.save(candidate) : candidate;

            if (!memberRepo.existsByWorkspaceIdAndUserId(saved.getId(), ownerUserId)) {
                WorkspaceMember ownerMember = WorkspaceMember.builder()
                    .workspace(saved)
                    .userId(ownerUserId)
                    .role(WorkspaceRole.OWNER)
                    .roleId(resolveRoleId("OWNER", "org_admin", "academic_admin", "professor"))
                    .joinedAt(Instant.now())
                    .build();
                memberRepo.save(ownerMember);
            }

            return saved;
        }

        Workspace workspace = Workspace.builder()
            .id(UUID.nameUUIDFromBytes((orgId + ":" + defaultSlug).getBytes(StandardCharsets.UTF_8)))
            .name(defaultName)
            .slug(defaultSlug)
            .ownerId(ownerUserId)
            .orgType(normalizedOrgType)
            .build();
        workspace.setOrganization(em.getReference(Organization.class, orgId));
        Workspace saved = workspaceRepo.save(workspace);

        if (!memberRepo.existsByWorkspaceIdAndUserId(saved.getId(), ownerUserId)) {
            WorkspaceMember ownerMember = WorkspaceMember.builder()
                .workspace(saved)
                .userId(ownerUserId)
                .role(WorkspaceRole.OWNER)
                .roleId(resolveRoleId("OWNER", "org_admin", "academic_admin", "professor"))
                .joinedAt(Instant.now())
                .build();
            memberRepo.save(ownerMember);
        }

        return saved;
    }

    private void ensureOrganizationExists(UUID orgId) {
        Organization organization = em.find(Organization.class, orgId);
        if (organization == null) {
            throw new Module2Exception(NOT_FOUND, "Organization not found: " + orgId);
        }
    }

    private UUID resolveAnyOrganizationIdForGlobalAdmin() {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT id FROM organizations ORDER BY created_at ASC LIMIT 1");
        if (rows.isEmpty()) {
            throw new Module2Exception(NOT_FOUND, "No organization is available for workspace creation");
        }

        Object orgIdValue = rows.get(0).get("id");
        if (orgIdValue == null) {
            throw new Module2Exception(INTERNAL, "Organization row is missing id value");
        }

        return parseUuidValue(orgIdValue);
    }

    private boolean isOrganizationScopedRole(User.RoleName role) {
        if (role == null) {
            return false;
        }

        return role == User.RoleName.MANAGER
            || role == User.RoleName.EMPLOYEE
            || role == User.RoleName.VIEWER
            || role == User.RoleName.TUTOR
            || role == User.RoleName.STUDENT
            || role == User.RoleName.PRODUCT_OWNER;
    }

    private WorkspaceRole resolveWorkspaceRoleForInvite(String orgType,
                                                        User.RoleName targetUserRole,
                                                        WorkspaceRole requestedRole) {
        WorkspaceRole safeRequestedRole = requestedRole != null ? requestedRole : WorkspaceRole.MEMBER;
        User.RoleName safeUserRole = targetUserRole != null ? targetUserRole : User.RoleName.EMPLOYEE;

        if ("academic".equalsIgnoreCase(orgType)) {
            return switch (safeUserRole) {
                case TUTOR, ADMIN, SUPER_ADMIN -> WorkspaceRole.ADMIN;
                case MANAGER, PRODUCT_OWNER -> WorkspaceRole.MANAGER;
                case STUDENT -> WorkspaceRole.MEMBER;
                case VIEWER -> WorkspaceRole.VIEWER;
                default -> safeRequestedRole;
            };
        }

        if (safeRequestedRole == WorkspaceRole.ADMIN) {
            throw new Module2Exception(FORBIDDEN, "Cannot assign admin role via this endpoint.");
        }

        return switch (safeUserRole) {
            case MANAGER, ADMIN, SUPER_ADMIN -> WorkspaceRole.MANAGER;
            case VIEWER -> WorkspaceRole.VIEWER;
            default -> WorkspaceRole.MEMBER;
        };
    }

    private String normalizeSlug(String value) {
        if (!StringUtils.hasText(value)) {
            return "";
        }

        String base = value.trim().toLowerCase(Locale.ROOT);
        base = base.replaceAll("[^a-z0-9]+", "-");
        base = base.replaceAll("^-+", "").replaceAll("-+$", "");
        return base;
    }

    private UUID parseUuidValue(Object value) {
        if (value instanceof UUID uuid) {
            return uuid;
        }

        if (value instanceof byte[] bytes) {
            if (bytes.length != 16) {
                throw new Module2Exception(INTERNAL, "Invalid binary UUID value length for organization membership");
            }

            long mostSignificantBits = 0;
            long leastSignificantBits = 0;

            for (int i = 0; i < 8; i++) {
                mostSignificantBits = (mostSignificantBits << 8) | (bytes[i] & 0xffL);
            }
            for (int i = 8; i < 16; i++) {
                leastSignificantBits = (leastSignificantBits << 8) | (bytes[i] & 0xffL);
            }

            return new UUID(mostSignificantBits, leastSignificantBits);
        }

        try {
            return UUID.fromString(value.toString());
        } catch (IllegalArgumentException ex) {
            throw new Module2Exception(INTERNAL, "Invalid UUID value in organization membership context");
        }
    }

    private Long resolveRoleId(String... roleNames) {
        for (String roleName : roleNames) {
            if (!StringUtils.hasText(roleName)) {
                continue;
            }
            try {
                Long roleId = jdbcTemplate.queryForObject(
                    "SELECT id FROM roles WHERE LOWER(name) = LOWER(?) LIMIT 1",
                    Long.class,
                    roleName
                );
                if (roleId != null) {
                    return roleId;
                }
            } catch (Exception ignored) {
                // fallback to next candidate
            }
        }
        return null;
    }

    private record OrgMembershipContext(UUID orgId, String orgRole) {}
}
