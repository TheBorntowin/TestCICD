package com.example.pi_projet.service;

import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class WorkspaceAuthHelper {

    private final JdbcTemplate jdbcTemplate;

    public boolean isOrgAdmin(UUID orgId, Long userId) {
        try {
            Integer count = jdbcTemplate.queryForObject(
                "SELECT COUNT(*) FROM org_members WHERE org_id = ? AND user_id = ? AND org_role IN ('org_admin','academic_admin')",
                Integer.class, orgId.toString(), userId);
            return count != null && count > 0;
        } catch (Exception e) {
            return false;
        }
    }

    @Nullable
    public String getWorkspaceRole(UUID workspaceId, Long userId) {
        try {
            return jdbcTemplate.queryForObject(
                "SELECT r.name FROM workspace_members wm JOIN roles r ON wm.role_id = r.id WHERE wm.workspace_id = ? AND wm.user_id = ? AND wm.status = 'active'",
                String.class, workspaceId.toString(), userId);
        } catch (Exception e) {
            return null;
        }
    }

    public boolean isWorkspaceAdminOrManager(UUID workspaceId, Long userId) {
        String role = getWorkspaceRole(workspaceId, userId);
        return "admin".equals(role) || "manager".equals(role);
    }
}
