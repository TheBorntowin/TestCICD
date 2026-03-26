package com.example.pi_projet.repository;

import com.example.pi_projet.entity.OrganizationMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OrganizationMemberRepository extends JpaRepository<OrganizationMember, UUID> {
    List<OrganizationMember> findAllByUserIdAndDeletedAtIsNull(Long userId);

    List<OrganizationMember> findAllByOrganization_IdAndDeletedAtIsNull(UUID organizationId);

    Optional<OrganizationMember> findByOrganization_IdAndUserIdAndDeletedAtIsNull(UUID organizationId, Long userId);

    long countByOrganization_IdAndDeletedAtIsNull(UUID organizationId);

    boolean existsByOrganization_IdAndUserIdAndDeletedAtIsNull(UUID organizationId, Long userId);
}
