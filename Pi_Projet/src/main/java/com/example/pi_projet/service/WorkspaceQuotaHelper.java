package com.example.pi_projet.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class WorkspaceQuotaHelper {

    private final JdbcTemplate jdbcTemplate;
    private final M2OrganizationService m2OrganizationService;
    private final M2SubscriptionService m2SubscriptionService;

    public long countActiveWorkspaces(UUID orgId) {
        Long cnt = jdbcTemplate.queryForObject(
            "SELECT COUNT(*) FROM workspaces WHERE organization_id = ? AND deleted_at IS NULL",
            Long.class, orgId.toString());
        return cnt == null ? 0L : cnt;
    }

    public long countActiveProjectsByOrg(UUID orgId) {
        Long cnt = jdbcTemplate.queryForObject(
            "SELECT COUNT(*) FROM projects p JOIN workspaces w ON p.workspace_id = w.id WHERE w.organization_id = ? AND p.deleted_at IS NULL",
            Long.class, orgId.toString());
        return cnt == null ? 0L : cnt;
    }

    // Returns organization type; tries Module 1 read via M2OrganizationService, falls back to stub
    public String getOrgTypeStub(UUID orgId) {
        try {
            return m2OrganizationService.getOrgType(orgId);
        } catch (Exception ignored) {
            // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 1 integration
            return "enterprise"; // STATIC STUB
        }
    }

    public int getMaxWorkspacesStub(UUID orgId) {
        try {
            return m2SubscriptionService.getMaxWorkspacesForOrg(orgId);
        } catch (Exception ignored) {
            // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 6 integration
            return 3; // STATIC STUB
        }
    }

    public int getMaxProjectsStub(UUID orgId) {
        try {
            return m2SubscriptionService.getMaxProjectsForOrg(orgId);
        } catch (Exception ignored) {
            // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 6 integration
            return 10; // STATIC STUB
        }
    }
}
