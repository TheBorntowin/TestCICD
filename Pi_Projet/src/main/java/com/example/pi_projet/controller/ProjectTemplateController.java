package com.example.pi_projet.controller;

import com.example.pi_projet.entity.ProjectTemplate;
import com.example.pi_projet.service.ProjectTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/project-templates")
@RequiredArgsConstructor
public class ProjectTemplateController {
    private final ProjectTemplateService projectTemplateService;

    @GetMapping
    public Page<ProjectTemplate> getAll(
            @RequestParam(required = false) Long createdBy,
            @RequestParam(required = false) String status,
            @PageableDefault(size = 50) Pageable pageable) {
        if (createdBy != null) return projectTemplateService.getByCreatedBy(createdBy, pageable);
        if (status != null) return projectTemplateService.getByStatus(
                ProjectTemplate.TemplateStatus.valueOf(status), pageable);
        return projectTemplateService.getAll(pageable);
    }

    @GetMapping("/{id}")
    public Optional<ProjectTemplate> getById(@PathVariable UUID id) {
        return projectTemplateService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectTemplate create(@RequestBody ProjectTemplate template) {
        return projectTemplateService.createTemplate(template);
    }

    @PutMapping("/{id}")
    public ProjectTemplate update(@PathVariable UUID id, @RequestBody ProjectTemplate template) {
        return projectTemplateService.update(id, template);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        projectTemplateService.delete(id);
    }

    @PostMapping("/{id}/publish")
    public ProjectTemplate publish(@PathVariable UUID id, @RequestBody Map<String, String> body) {
        Long requesterId = Long.parseLong(body.get("requesterId"));
        return projectTemplateService.publishTemplate(id, requesterId);
    }

    @PatchMapping("/{id}/approve")
    public ProjectTemplate approve(@PathVariable UUID id, @RequestBody Map<String, String> body) {
        Long approverId = Long.parseLong(body.get("approverId"));
        return projectTemplateService.approveTemplate(id, approverId);
    }

    @PatchMapping("/{id}/reject")
    public ProjectTemplate reject(@PathVariable UUID id, @RequestBody Map<String, String> body) {
        Long approverId = Long.parseLong(body.get("approverId"));
        String reason = body.get("reason");
        return projectTemplateService.rejectTemplate(id, approverId, reason);
    }

    @PostMapping("/{id}/rate")
    public ProjectTemplate rate(@PathVariable UUID id, @RequestBody Map<String, Object> body) {
        int rating = (int) body.get("rating");
        return projectTemplateService.rateTemplate(id, rating);
    }

    @GetMapping("/public")
    public Page<ProjectTemplate> getPublic(@PageableDefault(size = 20) Pageable pageable) {
        return projectTemplateService.getPublicTemplates(pageable);
    }

    @GetMapping("/pending")
    public Page<ProjectTemplate> getPending(@PageableDefault(size = 50) Pageable pageable) {
        return projectTemplateService.getByStatus(ProjectTemplate.TemplateStatus.PENDING_APPROVAL, pageable);
    }

    @PatchMapping("/{id}/feature")
    public ProjectTemplate setFeatured(@PathVariable UUID id, @RequestBody Map<String, Object> body) {
        boolean featured = Boolean.parseBoolean(body.getOrDefault("featured", false).toString());
        return projectTemplateService.featureTemplate(id, featured);
    }

    @PatchMapping("/{id}/trending")
    public ProjectTemplate setTrending(@PathVariable UUID id, @RequestBody Map<String, Object> body) {
        boolean trending = Boolean.parseBoolean(body.getOrDefault("trending", false).toString());
        return projectTemplateService.trendingTemplate(id, trending);
    }

    @PostMapping("/{id}/fork")
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectTemplate fork(@PathVariable UUID id, @RequestBody Map<String, Object> body) {
        Long requesterId = Long.parseLong(body.get("requesterId").toString());
        return projectTemplateService.forkTemplate(id, requesterId);
    }
}
