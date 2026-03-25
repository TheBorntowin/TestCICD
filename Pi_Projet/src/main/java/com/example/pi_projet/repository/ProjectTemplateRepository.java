package com.example.pi_projet.repository;

import com.example.pi_projet.entity.ProjectTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProjectTemplateRepository extends JpaRepository<ProjectTemplate, UUID> {
    Page<ProjectTemplate> findAllByIsPublicTrueAndStatus(ProjectTemplate.TemplateStatus status, Pageable pageable);
}
