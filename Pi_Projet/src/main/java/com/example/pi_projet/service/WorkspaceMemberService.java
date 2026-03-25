package com.example.pi_projet.service;

import com.example.pi_projet.entity.Workspace;
import com.example.pi_projet.entity.WorkspaceMember;
import com.example.pi_projet.entity.WorkspaceMember.WorkspaceRole;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.WorkspaceMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WorkspaceMemberService {

    private final WorkspaceMemberRepository memberRepo;
    private final WorkspaceService workspaceService;
    private final com.example.pi_projet.repository.UserRepository userRepo;

    public List<WorkspaceMember> getAll(UUID workspaceId, Long requesterId) {
        return memberRepo.findAllByWorkspaceId(workspaceId);
    }

    @Transactional
    public WorkspaceMember add(UUID workspaceId, Long userId, WorkspaceRole role, Long requesterId) {
        Workspace ws = workspaceService.getById(workspaceId);
        if (!userRepo.existsById(userId)) throw new Module2Exception(NOT_FOUND, "User to add not found");
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
    public WorkspaceMember updateRole(UUID workspaceId, Long userId, WorkspaceRole newRole, Long requesterId) {
        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        m.setRole(newRole);
        return memberRepo.save(m);
    }

    @Transactional
    public void remove(UUID workspaceId, Long userId, Long requesterId) {
        WorkspaceMember m = memberRepo.findByWorkspaceIdAndUserId(workspaceId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        memberRepo.delete(m);
    }
}
