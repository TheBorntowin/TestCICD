package com.example.pi_projet.service;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.WorkspaceMemberRepository;
import com.example.pi_projet.repository.WorkspaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WorkspaceService {

    private final WorkspaceRepository workspaceRepo;
    private final WorkspaceMemberRepository memberRepo;
    private final com.example.pi_projet.repository.UserRepository userRepo;

    public List<Workspace> getByMember(Long userId) {
        return workspaceRepo.findAllByMemberUserId(userId);
    }

    public Workspace getById(UUID id) {
        return workspaceRepo.findById(id)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Workspace not found: " + id));
    }

    @Transactional
    public Workspace createWorkspace(String name, String slug, Long ownerId) {
        if (!userRepo.existsById(ownerId)) throw new Module2Exception(NOT_FOUND, "Owner user not found");
        Workspace ws = Workspace.builder()
                .id(UUID.randomUUID())
                .name(name)
                .slug(slug)
                .ownerId(ownerId)
                .build();
        ws = workspaceRepo.save(ws);
        WorkspaceMember ownerMember = WorkspaceMember.builder()
            .workspace(ws).userId(ownerId).role(WorkspaceRole.OWNER).build();
        memberRepo.save(ownerMember);
        return ws;
    }

    @Transactional
    public Workspace update(UUID id, String name, Long requesterId) {
        Workspace ws = getById(id);
        ws.setName(name);
        return workspaceRepo.save(ws);
    }

    @Transactional
    public void delete(UUID id, Long requesterId) {
        Workspace ws = getById(id);
        workspaceRepo.delete(ws);
    }

    @Transactional
    public WorkspaceMember addMember(UUID workspaceId, Long userId, WorkspaceRole role, Long requesterId) {
        Workspace ws = getById(workspaceId);
        if (!userRepo.existsById(userId)) throw new Module2Exception(NOT_FOUND, "User to invite not found");
        if (!userRepo.existsById(requesterId)) throw new Module2Exception(NOT_FOUND, "Requester user not found");
        if (memberRepo.existsByWorkspaceIdAndUserId(workspaceId, userId)) {
            throw new Module2Exception(CONFLICT, "User already a member of the workspace");
        }
        var inviter = userRepo.findById(requesterId).orElseThrow(() -> new Module2Exception(NOT_FOUND, "Requester user not found"));
        WorkspaceMember m = WorkspaceMember.builder()
                .workspace(ws).userId(userId).role(role).invitedByUser(inviter).build();
        return memberRepo.save(m);
    }

    @Transactional
    public void removeMember(UUID workspaceId, Long userId, Long requesterId) {
        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Workspace member not found"));
        memberRepo.delete(m);
    }

    // ── auth helpers used by all services ────────────────────

    public void requireRole(UUID workspaceId, Long userId, WorkspaceRole... allowed) {
        // TODO: implement role checks integrating with security layer
    }

    public boolean isMember(UUID workspaceId, Long userId) {
        return memberRepo.existsByWorkspaceIdAndUserId(workspaceId, userId);
    }
}
