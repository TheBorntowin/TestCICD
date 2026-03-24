package com.example.pi_projet.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "usage_quotas")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class UsageQuota {

    @Id
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private String id;

    @PrePersist
    public void generateId() {
        if (this.id == null) this.id = UUID.randomUUID().toString();
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organization_id", nullable = false)
    private Organization organization;

    // FK → workspaces.id (externe au module, conservé en String brut)
    @Column(name = "workspace_id", nullable = false, length = 36)
    private String workspaceId;

    @Column(name = "period_start", nullable = false)
    private LocalDate periodStart;

    @Column(name = "period_end", nullable = false)
    private LocalDate periodEnd;

    @Column(name = "members_count", nullable = false)
    @Builder.Default
    private Integer membersCount = 0;

    @Column(name = "members_limit", nullable = false)
    private Integer membersLimit;

    @Column(name = "active_projects_count", nullable = false)
    @Builder.Default
    private Integer activeProjectsCount = 0;

    @Column(name = "projects_limit", nullable = false)
    private Integer projectsLimit;

    @Column(name = "storage_used_mb", nullable = false)
    @Builder.Default
    private Long storageUsedMb = 0L;

    @Column(name = "storage_limit_mb", nullable = false)
    private Long storageLimitMb;

    @Column(name = "api_calls_count", nullable = false)
    @Builder.Default
    private Long apiCallsCount = 0L;

    @Column(name = "ml_requests_count", nullable = false)
    @Builder.Default
    private Long mlRequestsCount = 0L;

    @Column(name = "quota_alert_80_sent_at")
    private LocalDateTime quotaAlert80SentAt;

    @Column(name = "quota_alert_100_sent_at")
    private LocalDateTime quotaAlert100SentAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
