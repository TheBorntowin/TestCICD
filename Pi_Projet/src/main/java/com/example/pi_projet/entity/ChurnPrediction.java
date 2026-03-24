package com.example.pi_projet.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "churn_predictions")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ChurnPrediction {

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscription_id", nullable = false)
    private Subscription subscription;

    @Column(name = "prediction_date", nullable = false)
    private LocalDate predictionDate;

    @Column(name = "churn_probability", nullable = false, precision = 5, scale = 4)
    private BigDecimal churnProbability;

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_segment", nullable = false, length = 20)
    private RiskSegment riskSegment;

    @Column(name = "wau_ratio", precision = 5, scale = 4)
    private BigDecimal wauRatio;

    @Column(name = "ml_usage_rate", precision = 5, scale = 4)
    private BigDecimal mlUsageRate;

    @Column(name = "support_ticket_count")
    private Short supportTicketCount;

    @Column(name = "last_login_delta_days")
    private Integer lastLoginDeltaDays;

    @Column(name = "plan_utilization_pct", precision = 5, scale = 2)
    private BigDecimal planUtilizationPct;

    @Column(name = "payment_failures_count")
    private Short paymentFailuresCount;

    @Column(name = "tenure_months")
    private Short tenureMonths;

    @Enumerated(EnumType.STRING)
    @Column(name = "action_triggered", length = 20)
    private ActionTriggered actionTriggered;

    @Column(name = "action_triggered_at")
    private LocalDateTime actionTriggeredAt;

    @Column(name = "model_version", nullable = false, length = 50)
    private String modelVersion;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // ── Enums ──
    public enum RiskSegment { STABLE, MEDIUM_RISK, HIGH_RISK }
    public enum ActionTriggered { NONE, EMAIL, CS_CALL, DISCOUNT_OFFER }
}
