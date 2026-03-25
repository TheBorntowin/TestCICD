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
@RequestMapping("/api/workspaces")
@RequiredArgsConstructor
public class WorkspaceController {

    private final WorkspaceService workspaceService;
    private final WorkspaceMemberService memberService;

    @GetMapping("/my/{userId}")
    public List<Workspace> getMyWorkspaces(@PathVariable Long userId) {
        return workspaceService.getByMember(userId);
    }

    @GetMapping("/{id}")
    public Workspace getById(@PathVariable UUID id) {
        return workspaceService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Workspace create(@RequestBody Map<String, String> body) {
        return workspaceService.createWorkspace(
            body.get("name"),
            body.get("slug"),
            Long.parseLong(body.get("ownerId"))
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
