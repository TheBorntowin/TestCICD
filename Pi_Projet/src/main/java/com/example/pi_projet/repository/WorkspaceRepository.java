// ── WorkspaceRepository ──────────────────────────────────────
package com.example.pi_projet.repository;

import com.example.pi_projet.entity.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, UUID> {

    Optional<Workspace> findBySlug(String slug);
    boolean existsBySlug(String slug);
    boolean existsBySlugAndOrganizationId(String slug, UUID organizationId);

    List<Workspace> findAllByOrganizationId(UUID organizationId);

    @Query("""
        SELECT w FROM Workspace w
        JOIN WorkspaceMember wm ON wm.workspace = w
        WHERE wm.userId = :userId AND wm.deletedAt IS NULL
        """)
    List<Workspace> findAllByMemberUserId(@Param("userId") Long userId);

    @Query("""
        SELECT w FROM Workspace w
        JOIN WorkspaceMember wm ON wm.workspace = w
        WHERE wm.userId = :userId
          AND w.organization.id = :orgId
          AND wm.deletedAt IS NULL
        """)
    List<Workspace> findAllByMemberUserIdAndOrganizationId(@Param("userId") Long userId,
                                                            @Param("orgId") UUID orgId);
}
