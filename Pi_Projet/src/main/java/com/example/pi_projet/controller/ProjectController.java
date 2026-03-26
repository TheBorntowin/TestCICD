package com.example.pi_projet.controller;

import com.example.pi_projet.entity.Project;
import com.example.pi_projet.entity.Project.ProjectStatus;
import com.example.pi_projet.entity.Project.Visibility;
import com.example.pi_projet.entity.ProjectMember;
import com.example.pi_projet.entity.User;
import com.example.pi_projet.exception.Module2Exception;
import com.example.pi_projet.service.ProjectMemberService;
import com.example.pi_projet.service.ProjectService;
import jakarta.servlet.http.HttpServletRequest;
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
@RequestMapping("/api/v1/workspaces/{workspaceId}/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMemberService projectMemberService;

    @GetMapping
    public Page<Project> getAll(@PathVariable UUID workspaceId,
                                HttpServletRequest request,
                                @PageableDefault(size = 20) Pageable pageable) {
        User currentUser = requireCurrentUser(request);
        return projectService.getVisible(workspaceId, currentUser.getId(), pageable);
    }

    @GetMapping("/{projectId}")
    public Project getById(@PathVariable UUID workspaceId,
                           @PathVariable UUID projectId,
                           HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectService.getById(projectId, currentUser.getId());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project create(@PathVariable UUID workspaceId,
                          @RequestBody Map<String, Object> body,
                          HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectService.create(
            workspaceId,
            (String) body.get("name"),
            (String) body.get("description"),
            body.get("visibility") != null ? Visibility.valueOf((String) body.get("visibility")) : Visibility.PUBLIC,
            body.get("startDate") != null ? LocalDate.parse((String) body.get("startDate")) : null,
            body.get("endDate")   != null ? LocalDate.parse((String) body.get("endDate"))   : null,
            currentUser.getId()
        );
    }

    @PutMapping("/{projectId}")
    public Project update(@PathVariable UUID workspaceId,
                          @PathVariable UUID projectId,
                          @RequestBody Map<String, Object> body,
                          HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectService.update(
            projectId,
            (String) body.get("name"),
            (String) body.get("description"),
            body.get("visibility") != null ? Visibility.valueOf((String) body.get("visibility")) : null,
            body.get("startDate") != null ? LocalDate.parse((String) body.get("startDate")) : null,
            body.get("endDate")   != null ? LocalDate.parse((String) body.get("endDate"))   : null,
            currentUser.getId()
        );
    }

    @PatchMapping("/{projectId}/status")
    public Project changeStatus(@PathVariable UUID workspaceId,
                                @PathVariable UUID projectId,
                                @RequestBody Map<String, String> body,
                                HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectService.changeStatus(
            projectId,
            ProjectStatus.valueOf(body.get("status")),
            currentUser.getId()
        );
    }

    @DeleteMapping("/{projectId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID workspaceId,
                       @PathVariable UUID projectId,
                       HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        projectService.delete(projectId, currentUser.getId());
    }


    // ── Project Members ───────────────────────────────────────

    @GetMapping("/{projectId}/members")
    public List<ProjectMember> getMembers(@PathVariable UUID workspaceId,
                                          @PathVariable UUID projectId,
                                          HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectMemberService.getAll(projectId, currentUser.getId());
    }

    @GetMapping("/{projectId}/available-members")
    public List<Map<String, Object>> getAvailableMembers(@PathVariable UUID workspaceId,
                                                          @PathVariable UUID projectId,
                                                          HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectMemberService.getAvailableWorkspaceMembers(workspaceId, projectId, currentUser.getId());
    }

    @PostMapping("/{projectId}/members")
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectMember addMember(@PathVariable UUID workspaceId,
                                   @PathVariable UUID projectId,
                                   @RequestBody Map<String, String> body,
                                   HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectMemberService.add(
            projectId,
            Long.parseLong(body.get("userId")),
            body.get("role"),
            currentUser.getId()
        );
    }

    @PatchMapping("/{projectId}/members/{userId}/role")
    public ProjectMember updateMemberRole(@PathVariable UUID workspaceId,
                                          @PathVariable UUID projectId,
                                          @PathVariable Long userId,
                                          @RequestBody Map<String, String> body,
                                          HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return projectMemberService.updateRole(
            projectId, userId,
            body.get("role"),
            currentUser.getId()
        );
    }

    @DeleteMapping("/{projectId}/members/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeMember(@PathVariable UUID workspaceId,
                             @PathVariable UUID projectId,
                             @PathVariable Long userId,
                             HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        projectMemberService.remove(projectId, userId, currentUser.getId());
    }

    private User requireCurrentUser(HttpServletRequest request) {
        Object user = request.getAttribute("currentUser");
        if (!(user instanceof User currentUser)) {
            throw new Module2Exception(Module2Exception.ErrorCode.FORBIDDEN, "Missing authenticated user context");
        }
        return currentUser;
    }
}
