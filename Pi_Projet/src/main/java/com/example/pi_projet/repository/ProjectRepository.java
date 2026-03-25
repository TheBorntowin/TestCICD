package com.example.pi_projet.repository;

import com.example.pi_projet.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<Project, UUID> {

    Page<Project> findAllByWorkspaceId(UUID workspaceId, Pageable pageable);
    long countByWorkspaceIdAndDeletedAtIsNull(UUID workspaceId);

    @Query("""
        SELECT DISTINCT p FROM Project p
        LEFT JOIN ProjectMember pm ON pm.project = p AND pm.userId = :userId AND pm.deletedAt IS NULL
        WHERE p.workspace.id = :workspaceId
          AND (p.visibility = 'PUBLIC' OR pm.id IS NOT NULL)
        """)
    Page<Project> findVisibleToUser(@Param("workspaceId") UUID workspaceId,
                                    @Param("userId") Long userId,
                                    Pageable pageable);

}
