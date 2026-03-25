package com.example.pi_projet.repository;

import com.example.pi_projet.entity.WorkspaceMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface WorkspaceMemberRepository extends JpaRepository<WorkspaceMember, UUID> {

    Optional<WorkspaceMember> findByWorkspaceIdAndUserId(UUID workspaceId, Long userId);
    boolean existsByWorkspaceIdAndUserId(UUID workspaceId, Long userId);
    List<WorkspaceMember> findAllByWorkspaceId(UUID workspaceId);
    long countByWorkspaceIdAndDeletedAtIsNull(UUID workspaceId);
}
