package com.example.pi_projet.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Module-2 prefixed subscription adapter to read plan limits from DB (Module 6)
 * Falls back to defaults when tables or data not available.
 */
@Service
@RequiredArgsConstructor
public class M2SubscriptionService {
    private final JdbcTemplate jdbcTemplate;

    // Try to read from a subscription or plan limits table; fall back to defaults
    public int getMaxWorkspacesForOrg(UUID orgId) {
        try {
            Integer v = jdbcTemplate.queryForObject(
                "SELECT max_workspaces FROM subscription_limits WHERE org_id = ?",
                Integer.class, orgId.toString());
            if (v != null) return v;
        } catch (Exception ignored) {
            // Table may not exist in this module; fallback
        }
        // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 6 integration
        return 3;
    }

    public int getMaxProjectsForOrg(UUID orgId) {
        try {
            Integer v = jdbcTemplate.queryForObject(
                "SELECT max_projects FROM subscription_limits WHERE org_id = ?",
                Integer.class, orgId.toString());
            if (v != null) return v;
        } catch (Exception ignored) {
        }
        // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 6 integration
        return 10;
    }
}
