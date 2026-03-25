package com.example.pi_projet.repository;

import com.example.pi_projet.entity.ProjectMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProjectMemberRepository extends JpaRepository<ProjectMember, UUID> {

    Optional<ProjectMember> findByProjectIdAndUserId(UUID projectId, Long userId);
    boolean existsByProjectIdAndUserId(UUID projectId, Long userId);
    List<ProjectMember> findAllByProjectId(UUID projectId);
    List<ProjectMember> findAllByUserId(Long userId);
}
