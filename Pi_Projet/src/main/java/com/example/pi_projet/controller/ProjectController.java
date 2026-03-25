package com.example.pi_projet.controller;

import com.example.pi_projet.entity.Project;
import com.example.pi_projet.entity.Project.ProjectStatus;
import com.example.pi_projet.entity.Project.Visibility;
import com.example.pi_projet.entity.ProjectMember;
import com.example.pi_projet.entity.ProjectMember.ProjectRole;
import com.example.pi_projet.service.ProjectMemberService;
import com.example.pi_projet.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/workspaces/{workspaceId}/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMemberService projectMemberService;

    @GetMapping
    public Page<Project> getAll(@PathVariable UUID workspaceId,
                                @RequestParam Long requesterId,
                                @PageableDefault(size = 20) Pageable pageable) {
        return projectService.getVisible(workspaceId, requesterId, pageable);
    }

    @GetMapping("/{projectId}")
    public Project getById(@PathVariable UUID workspaceId,
                           @PathVariable UUID projectId,
                           @RequestParam Long requesterId) {
        return projectService.getById(projectId, requesterId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project create(@PathVariable UUID workspaceId,
                          @RequestBody Map<String, Object> body) {
        return projectService.create(
            workspaceId,
            (String) body.get("name"),
            (String) body.get("description"),
            body.get("visibility") != null ? Visibility.valueOf((String) body.get("visibility")) : Visibility.PUBLIC,
            body.get("startDate") != null ? LocalDate.parse((String) body.get("startDate")) : null,
            body.get("endDate")   != null ? LocalDate.parse((String) body.get("endDate"))   : null,
            Long.parseLong((String) body.get("requesterId"))
        );
    }

    @PutMapping("/{projectId}")
    public Project update(@PathVariable UUID workspaceId,
                          @PathVariable UUID projectId,
                          @RequestBody Map<String, Object> body) {
        return projectService.update(
            projectId,
            (String) body.get("name"),
            (String) body.get("description"),
            body.get("visibility") != null ? Visibility.valueOf((String) body.get("visibility")) : null,
            body.get("startDate") != null ? LocalDate.parse((String) body.get("startDate")) : null,
            body.get("endDate")   != null ? LocalDate.parse((String) body.get("endDate"))   : null,
            Long.parseLong((String) body.get("requesterId"))
        );
    }

    @PatchMapping("/{projectId}/status")
    public Project changeStatus(@PathVariable UUID workspaceId,
                                @PathVariable UUID projectId,
                                @RequestBody Map<String, String> body) {
        return projectService.changeStatus(
            projectId,
            ProjectStatus.valueOf(body.get("status")),
            Long.parseLong(body.get("requesterId"))
        );
    }

    @DeleteMapping("/{projectId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID workspaceId,
                       @PathVariable UUID projectId,
                       @RequestParam Long requesterId) {
        projectService.delete(projectId, requesterId);
    }


    // ── Project Members ───────────────────────────────────────

    @GetMapping("/{projectId}/members")
    public List<ProjectMember> getMembers(@PathVariable UUID workspaceId,
                                          @PathVariable UUID projectId,
                                          @RequestParam Long requesterId) {
        return projectMemberService.getAll(projectId, requesterId);
    }

    @PostMapping("/{projectId}/members")
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectMember addMember(@PathVariable UUID workspaceId,
                                   @PathVariable UUID projectId,
                                   @RequestBody Map<String, String> body) {
        return projectMemberService.add(
            projectId,
            Long.parseLong(body.get("userId")),
            ProjectRole.valueOf(body.getOrDefault("role", "DEVELOPER")),
            Long.parseLong(body.get("requesterId"))
        );
    }

    @PatchMapping("/{projectId}/members/{userId}/role")
    public ProjectMember updateMemberRole(@PathVariable UUID workspaceId,
                                          @PathVariable UUID projectId,
                                          @PathVariable Long userId,
                                          @RequestBody Map<String, String> body) {
        return projectMemberService.updateRole(
            projectId, userId,
            ProjectRole.valueOf(body.get("role")),
            Long.parseLong(body.get("requesterId"))
        );
    }

    @DeleteMapping("/{projectId}/members/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeMember(@PathVariable UUID workspaceId,
                             @PathVariable UUID projectId,
                             @PathVariable Long userId,
                             @RequestParam Long requesterId) {
        projectMemberService.remove(projectId, userId, requesterId);
    }
}
