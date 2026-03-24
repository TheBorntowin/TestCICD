package com.example.pi_projet.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SQLDelete;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "ml_team_recommendations",
        indexes = {
                @Index(name = "idx_mltr_project", columnList = "project_id"),
                @Index(name = "idx_mltr_user", columnList = "recommended_user_id"),
                @Index(name = "idx_mltr_status", columnList = "status")
        }
)
@SQLDelete(sql = "UPDATE ml_team_recommendations SET deleted_at = NOW() WHERE id = ?")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class MLTeamRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(name = "recommended_user_id", nullable = false)
    private UUID recommendedUserId;

    @Enumerated(EnumType.STRING)
    @Column(name = "target_role", nullable = false, length = 25)
    private ProjectMember.ProjectRole targetRole;

    @Column(name = "compatibility_score", nullable = false)
    private Float compatibilityScore;

    @Column(name = "shap_features_json", columnDefinition = "TEXT")
    private String shapFeaturesJson;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 25)
    @Builder.Default
    private RecommendationStatus status = RecommendationStatus.PENDING;

    @CreationTimestamp
    @Column(name = "generated_at", nullable = false, updatable = false)
    private Instant generatedAt;

    @Column(name = "reviewed_by")
    private UUID reviewedBy;

    @Column(name = "reviewed_at")
    private Instant reviewedAt;

    @Column(name = "deleted_at")
    private Instant deletedAt;

    public enum RecommendationStatus {
        PENDING, ACCEPTED, REJECTED, EXPIRED
    }
}
