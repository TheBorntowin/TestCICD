package com.example.pi_projet.controller;

import com.example.pi_projet.entity.User;
import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.exception.Module2Exception;
import com.example.pi_projet.service.WorkspaceMemberService;
import com.example.pi_projet.service.WorkspaceService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/workspaces")
@RequiredArgsConstructor
public class WorkspaceController {

    private final WorkspaceService workspaceService;
    private final WorkspaceMemberService memberService;

    @GetMapping
    public List<Workspace> getVisibleWorkspaces(HttpServletRequest request) {
        return workspaceService.getVisibleForUser(requireCurrentUser(request));
    }

    @GetMapping("/{id}")
    public Workspace getById(@PathVariable UUID id, HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        // enforce requester must be a workspace member
        if (!workspaceService.isMember(id, currentUser.getId()) && !workspaceService.isGlobalAdmin(currentUser)) {
            throw new com.example.pi_projet.exception.Module2Exception(com.example.pi_projet.exception.Module2Exception.ErrorCode.FORBIDDEN, "Requester is not a workspace member");
        }
        return workspaceService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Workspace createWorkspace(@RequestBody Map<String, String> body, HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        UUID organizationId = parseOptionalUuid(body.getOrDefault("organizationId", body.get("orgId")));
        return workspaceService.createWorkspaceForCurrentUser(
            currentUser,
            body.get("name"),
            body.get("slug"),
            organizationId
        );
    }

    @PutMapping("/{id}")
    public Workspace update(@PathVariable UUID id,
                            @RequestBody Map<String, String> body,
                            HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return workspaceService.update(id, body.get("name"), currentUser.getId());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id, HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        workspaceService.delete(id, currentUser.getId());
    }

    // ── Members ───────────────────────────────────────────────

    @GetMapping("/{id}/members")
    public List<WorkspaceMember> getMembers(@PathVariable UUID id,
                                            HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return memberService.getAll(id, currentUser.getId());
    }

    @PostMapping("/{id}/members")
    @ResponseStatus(HttpStatus.CREATED)
    public WorkspaceMember addMember(@PathVariable UUID id,
                                     @RequestBody Map<String, String> body,
                                     HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return memberService.add(id,
            Long.parseLong(body.get("userId")),
            WorkspaceRole.valueOf(body.get("role")),
            currentUser.getId());
    }

    @PatchMapping("/{id}/members/{userId}/role")
    public WorkspaceMember updateRole(@PathVariable UUID id,
                                      @PathVariable Long userId,
                                      @RequestBody Map<String, String> body,
                                      HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        return memberService.updateRole(id, userId,
            WorkspaceRole.valueOf(body.get("role")),
            currentUser.getId());
    }

    @DeleteMapping("/{id}/members/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeMember(@PathVariable UUID id,
                              @PathVariable Long userId,
                              HttpServletRequest request) {
        User currentUser = requireCurrentUser(request);
        memberService.remove(id, userId, currentUser.getId());
    }

    private User requireCurrentUser(HttpServletRequest request) {
        Object user = request.getAttribute("currentUser");
        if (!(user instanceof User currentUser)) {
            throw new Module2Exception(Module2Exception.ErrorCode.FORBIDDEN, "Missing authenticated user context");
        }
        return currentUser;
    }

    private UUID parseOptionalUuid(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return UUID.fromString(value);
        } catch (IllegalArgumentException ex) {
            throw new Module2Exception(Module2Exception.ErrorCode.VALIDATION, "Invalid organizationId UUID format");
        }
    }
}
