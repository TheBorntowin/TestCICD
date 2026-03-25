package com.example.pi_projet.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class M2AuditLogService {
    private final JdbcTemplate jdbcTemplate;

    public void writeAudit(Long userId, UUID orgId, String actionType, String entityType, String entityId, String ipAddress) {
        try {
            jdbcTemplate.update(
                "INSERT INTO audit_logs (user_id, org_id, action_type, entity_type, entity_id, ip_address, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())",
                userId, orgId == null ? null : orgId.toString(), actionType, entityType, entityId, ipAddress
            );
        } catch (Exception e) {
            log.warn("Failed to write audit log: {}", e.getMessage());
        }
    }
}
