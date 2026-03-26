package com.example.pi_projet.service;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.entity.User;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.WorkspaceMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WorkspaceMemberService {

    private final WorkspaceMemberRepository memberRepo;
    private final WorkspaceService workspaceService;
    private final com.example.pi_projet.repository.UserRepository userRepo;
    private final JdbcTemplate jdbcTemplate;
    private final WorkspaceAuthHelper authHelper;

    public List<WorkspaceMember> getAll(UUID workspaceId, Long requesterId) {
        Workspace workspace = workspaceService.getById(workspaceId);
        UUID orgId = workspace.getOrganization().getId();
        if (!workspaceService.isMember(workspaceId, requesterId)
            && !authHelper.isOrgAdmin(orgId, requesterId)
            && !isGlobalAdmin(requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only workspace members or org admins can view members");
        }
        return memberRepo.findAllByWorkspaceId(workspaceId);
    }

    @Transactional
    public WorkspaceMember add(UUID workspaceId, Long userId, WorkspaceRole role, Long requesterId) {
        // delegate to WorkspaceService to ensure consistent auth/audit/quota handling
        return workspaceService.addMember(workspaceId, userId, role, requesterId, null);
    }

    @Transactional
    public WorkspaceMember updateRole(UUID workspaceId, Long userId, WorkspaceRole newRole, Long requesterId) {
        Workspace workspace = workspaceService.getById(workspaceId);
        UUID orgId = workspace.getOrganization().getId();
        if (!authHelper.isWorkspaceOwnerOrAdmin(workspaceId, requesterId) && !authHelper.isOrgAdmin(orgId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only org admin, workspace owner, or workspace admin can update member role.");
        }

        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        m.setRole(newRole);
        m.setRoleId(resolveRoleId(newRole.name()));
        return memberRepo.save(m);
    }

    @Transactional
    public void remove(UUID workspaceId, Long userId, Long requesterId) {
        Workspace workspace = workspaceService.getById(workspaceId);
        UUID orgId = workspace.getOrganization().getId();
        if (!authHelper.isWorkspaceOwnerOrAdmin(workspaceId, requesterId) && !authHelper.isOrgAdmin(orgId, requesterId)) {
            throw new Module2Exception(FORBIDDEN, "Only org admin, workspace owner, or workspace admin can remove members.");
        }

        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        memberRepo.delete(m);
    }

    private boolean isGlobalAdmin(Long userId) {
        return userRepo.findById(userId)
            .map(User::getRole)
            .map(role -> role == User.RoleName.SUPER_ADMIN || role == User.RoleName.ADMIN)
            .orElse(false);
    }

    private Long resolveRoleId(String roleName) {
        if (!StringUtils.hasText(roleName)) {
            return null;
        }
        try {
            return jdbcTemplate.queryForObject(
                "SELECT id FROM roles WHERE LOWER(name) = LOWER(?) LIMIT 1",
                Long.class,
                roleName
            );
        } catch (Exception ignored) {
            return null;
        }
    }
}
