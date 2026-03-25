package com.example.pi_projet.controller;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.service.WorkspaceMemberService;
import com.example.pi_projet.service.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class WorkspaceController {

    private final WorkspaceService workspaceService;
    private final WorkspaceMemberService memberService;

    @GetMapping("/my/{userId}")
    public List<Workspace> getMyWorkspaces(@PathVariable Long userId) {
        return workspaceService.getByMember(userId);
    }

    @GetMapping("/v1/workspaces/{id}")
    public Workspace getById(@PathVariable UUID id, @RequestParam Long requesterId) {
        // enforce requester must be a workspace member
        if (!workspaceService.isMember(id, requesterId)) {
            throw new com.example.pi_projet.exception.Module2Exception(com.example.pi_projet.exception.Module2Exception.ErrorCode.FORBIDDEN, "Requester is not a workspace member");
        }
        return workspaceService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Workspace create(@RequestBody Map<String, String> body) {
        return workspaceService.createWorkspace(
            // legacy: no orgId path
            java.util.UUID.fromString(body.getOrDefault("orgId", "00000000-0000-0000-0000-000000000000")),
            body.get("name"),
            body.get("slug"),
            Long.parseLong(body.get("ownerId")),
            body.getOrDefault("ipAddress", null)
        );
    }

    @PostMapping("/v1/organizations/{orgId}/workspaces")
    @ResponseStatus(HttpStatus.CREATED)
    public Workspace createForOrg(@PathVariable java.util.UUID orgId, @RequestBody Map<String, String> body) {
        return workspaceService.createWorkspace(
            orgId,
            body.get("name"),
            body.get("slug"),
            Long.parseLong(body.get("requesterId")),
            body.getOrDefault("ipAddress", null)
        );
    }

    @PutMapping("/{id}")
    public Workspace update(@PathVariable UUID id, @RequestBody Map<String, String> body) {
        return workspaceService.update(id, body.get("name"),
            Long.parseLong(body.get("requesterId")));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id, @RequestParam Long requesterId) {
        workspaceService.delete(id, requesterId);
    }

    // ── Members ───────────────────────────────────────────────

    @GetMapping("/{id}/members")
    public List<WorkspaceMember> getMembers(@PathVariable UUID id,
                                            @RequestParam Long requesterId) {
        return memberService.getAll(id, requesterId);
    }

    @PostMapping("/{id}/members")
    @ResponseStatus(HttpStatus.CREATED)
    public WorkspaceMember addMember(@PathVariable UUID id,
                                     @RequestBody Map<String, String> body) {
        return memberService.add(id,
            Long.parseLong(body.get("userId")),
            WorkspaceRole.valueOf(body.get("role")),
            Long.parseLong(body.get("requesterId")));
    }

    @PatchMapping("/{id}/members/{userId}/role")
    public WorkspaceMember updateRole(@PathVariable UUID id,
                                      @PathVariable Long userId,
                                      @RequestBody Map<String, String> body) {
        return memberService.updateRole(id, userId,
            WorkspaceRole.valueOf(body.get("role")),
            Long.parseLong(body.get("requesterId")));
    }

    @DeleteMapping("/{id}/members/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeMember(@PathVariable UUID id,
                              @PathVariable Long userId,
                              @RequestParam Long requesterId) {
        memberService.remove(id, userId, requesterId);
    }
}
