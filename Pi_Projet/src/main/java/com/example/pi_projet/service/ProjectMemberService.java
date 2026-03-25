package com.example.pi_projet.service;

import com.example.pi_projet.entity.ProjectMember;
import com.example.pi_projet.entity.ProjectMember.ProjectRole;
import com.example.pi_projet.exception.Module2Exception;
import static com.example.pi_projet.exception.Module2Exception.ErrorCode.*;
import com.example.pi_projet.repository.ProjectMemberRepository;
import com.example.pi_projet.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectMemberService {

    private final ProjectMemberRepository memberRepo;
    private final ProjectRepository projectRepo;
    private final WorkspaceService workspaceService;
    private final ProjectService projectService;
    private final com.example.pi_projet.repository.UserRepository userRepo;

    public List<ProjectMember> getAll(UUID projectId, Long requesterId) {
        return memberRepo.findAllByProjectId(projectId);
    }

    @Transactional
    public ProjectMember add(UUID projectId, Long userId, ProjectRole role, Long requesterId) {
        // delegate to ProjectService which enforces permissions, workspace membership and auditing
        projectService.assignMemberToProject(projectId, userId, role, requesterId);
        return memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found after assignment"));
    }

    @Transactional
    public ProjectMember updateRole(UUID projectId, Long userId, ProjectRole newRole, Long requesterId) {
        ProjectMember m = memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        m.setRole(newRole);
        return memberRepo.save(m);
    }

    @Transactional
    public void remove(UUID projectId, Long userId, Long requesterId) {
        ProjectMember m = memberRepo.findByProjectIdAndUserId(projectId, userId)
            .orElseThrow(() -> new Module2Exception(NOT_FOUND, "Member not found"));
        memberRepo.delete(m);
    }
}
