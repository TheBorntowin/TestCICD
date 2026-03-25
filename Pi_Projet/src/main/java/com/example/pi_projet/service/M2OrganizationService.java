package com.example.pi_projet.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Module-2 adapter to read lightweight organization properties from DB (Module 1)
 */
@Service
@RequiredArgsConstructor
public class M2OrganizationService {
    private final JdbcTemplate jdbcTemplate;

    public String getOrgType(UUID orgId) {
        try {
            String t = jdbcTemplate.queryForObject(
                "SELECT org_type FROM organizations WHERE id = ?",
                String.class, orgId.toString());
            if (t != null) return t;
        } catch (Exception ignored) {
            // Table may not exist here; fallback
        }
        // TODO [CROSS-MODULE DEPENDENCY] — Replace fallback with Module 1 OrganizationService
        return "enterprise";
    }
}
