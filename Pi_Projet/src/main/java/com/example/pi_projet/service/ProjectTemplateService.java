package com.example.pi_projet.service;

import com.example.pi_projet.entity.ProjectTemplate;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.ProjectTemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectTemplateService {
    private final ProjectTemplateRepository projectTemplateRepository;

    public Page<ProjectTemplate> getAll(Pageable pageable) {
        return projectTemplateRepository.findAll(pageable);
    }

    public Optional<ProjectTemplate> getById(UUID id) {
        return projectTemplateRepository.findById(id);
    }
    public ProjectTemplate createTemplate(ProjectTemplate template) {
        if (template.getName() == null || template.getName().isBlank()) {
            throw new Module2Exception(BAD_REQUEST, "Template name is required");
        }
        template.setStatus(ProjectTemplate.TemplateStatus.DRAFT);
        template.setIsPublic(false);
        template.setUsageCount(0);
        template.setRating(0.0);
        template.setRatingCount(0);
        return projectTemplateRepository.save(template);
    }

    public ProjectTemplate update(UUID id, ProjectTemplate updated) {
        return projectTemplateRepository.findById(id)
                .map(existing -> {
                    existing.setName(updated.getName());
                    existing.setTemplateType(updated.getTemplateType());
                    existing.setDefaultPhasesJson(updated.getDefaultPhasesJson());
                    existing.setDefaultRolesJson(updated.getDefaultRolesJson());
                    existing.setDefaultMilestonesJson(updated.getDefaultMilestonesJson());
                    existing.setDefaultTasksJson(updated.getDefaultTasksJson());
                    existing.setDefaultProjectConfigJson(updated.getDefaultProjectConfigJson());
                    existing.setUseCaseDescription(updated.getUseCaseDescription());
                    existing.setEstimatedEffort(updated.getEstimatedEffort());
                    existing.setEstimatedDurationDays(updated.getEstimatedDurationDays());
                    existing.setDifficultyLevel(updated.getDifficultyLevel());
                    existing.setTags(updated.getTags());
                    return projectTemplateRepository.save(existing);
                })
                .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
    }

    public void delete(UUID id) {
        projectTemplateRepository.deleteById(id);
    }

    public ProjectTemplate publishTemplate(UUID id, Long requesterId) {
        ProjectTemplate t = projectTemplateRepository.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
        // Ensure core JSON exists before publishing
        if (t.getDefaultProjectConfigJson() == null || t.getDefaultProjectConfigJson().isBlank()) {
            throw new Module2Exception(BAD_REQUEST, "Template missing default project config JSON");
        }
        t.setIsPublic(true);
        t.setStatus(ProjectTemplate.TemplateStatus.PENDING_APPROVAL);
        return projectTemplateRepository.save(t);
    }

    public ProjectTemplate approveTemplate(UUID id, Long approverId) {
        ProjectTemplate t = projectTemplateRepository.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
        t.setStatus(ProjectTemplate.TemplateStatus.APPROVED);
        t.setApprovedBy(approverId);
        t.setApprovedAt(LocalDateTime.now());
        return projectTemplateRepository.save(t);
    }

    public ProjectTemplate rejectTemplate(UUID id, Long approverId, String reason) {
        ProjectTemplate t = projectTemplateRepository.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
        t.setStatus(ProjectTemplate.TemplateStatus.REJECTED);
        t.setApprovedBy(approverId);
        t.setRejectionReason(reason);
        return projectTemplateRepository.save(t);
    }

    public ProjectTemplate rateTemplate(UUID id, int rating) {
        if (rating < 1 || rating > 5) throw new Module2Exception(BAD_REQUEST, "Rating must be between 1 and 5");
        ProjectTemplate t = projectTemplateRepository.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Template not found"));
        int currentCount = t.getRatingCount() == null ? 0 : t.getRatingCount();
        double currentRating = t.getRating() == null ? 0.0 : t.getRating();
        double newAvg = (currentRating * currentCount + rating) / (currentCount + 1);
        t.setRating(newAvg);
        t.setRatingCount(currentCount + 1);
        return projectTemplateRepository.save(t);
    }

    public Page<ProjectTemplate> getPublicTemplates(Pageable pageable) {
        return projectTemplateRepository.findAllByIsPublicTrueAndStatus(ProjectTemplate.TemplateStatus.APPROVED, pageable);
    }

    // simple saver used by other services when updating usage or small fields
    public ProjectTemplate saveTemplate(ProjectTemplate template) {
        return projectTemplateRepository.save(template);
    }
}
