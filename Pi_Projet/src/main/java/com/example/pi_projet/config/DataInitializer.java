package com.example.pi_projet.config;

import com.example.pi_projet.entity.User;
import com.example.pi_projet.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Insère des utilisateurs de test au démarrage.
 * À supprimer en production.
 */
@Component
@RequiredArgsConstructor
@Order(1)
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        List<TestUser> users = List.of(
            new TestUser("superadmin@cmp.com", "superadmin123", "Super Admin",   User.RoleName.SUPER_ADMIN),
            new TestUser("admin@test.com",     "admin123",      "Admin User",    User.RoleName.ADMIN),
            new TestUser("manager@test.com",   "manager123",    "Manager User",  User.RoleName.MANAGER),
            new TestUser("tutor@test.com",        "tutor123",    "Tutor User",         User.RoleName.TUTOR),
            new TestUser("po@test.com",           "productowner123",  "Product Owner",  User.RoleName.PRODUCT_OWNER),
            new TestUser("student@test.com",    "student123",    "Student User",  User.RoleName.STUDENT),
            new TestUser("viewer@test.com",     "viewer123",     "Viewer User",   User.RoleName.VIEWER),
            new TestUser("employee@test.com",   "employee123",   "Employee User", User.RoleName.EMPLOYEE)
        );

        for (TestUser u : users) {
            if (!userRepository.existsByEmail(u.email())) {
                try {
                    userRepository.save(User.builder()
                        .email(u.email())
                        .passwordHash(passwordEncoder.encode(u.password()))
                        .fullName(u.fullName())
                        .role(u.role())
                        .isActive(true)
                        .isVerified(true)
                        .build());
                    log.info("[DataInitializer] Created user {}", u.email());
                } catch (Exception ex) {
                    log.error("[DataInitializer] Failed to seed user {} with role {}", u.email(), u.role(), ex);
                }
            }
        }
    }

    private record TestUser(String email, String password, String fullName, User.RoleName role) {}
}
