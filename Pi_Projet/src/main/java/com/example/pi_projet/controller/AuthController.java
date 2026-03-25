package com.example.pi_projet.controller;

import com.example.pi_projet.annotation.Authorized;
import com.example.pi_projet.dto.AuthResponse;
import com.example.pi_projet.dto.LoginRequest;
import com.example.pi_projet.entity.User;
import com.example.pi_projet.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for login, logout and session management")
public class AuthController {

    private final AuthService authService;

    // ──────────────────────────────────────────────
    // POST /api/auth/login
    // ──────────────────────────────────────────────
    @Operation(
        summary = "Sign in",
        description = """
            Authenticates the user and returns a session token.

            **How to use the token:**
            Add the header `Authorization: Bearer <token>` to every subsequent request.
            The token is valid for **8 hours**.
            """
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Login successful",
            content = @Content(schema = @Schema(implementation = AuthResponse.class),
                examples = @ExampleObject(value = """
                    {
                      "token": "3f7a9400-ce5a-4efa-9cc8-90ef7846a1a8",
                      "id": 1,
                      "email": "admin@test.com",
                      "fullName": "Admin User",
                      "role": "ADMIN"
                    }
                """))),
        @ApiResponse(responseCode = "401", description = "Invalid email or password",
            content = @Content(examples = @ExampleObject(value = """
                { "message": "Invalid email or password." }
            """)))
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest body, HttpServletRequest request) {
        Optional<String> tokenOpt = authService.login(body.email(), body.password(), request);
        if (tokenOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password."));
        }
        User user = authService.getUserFromToken(tokenOpt.get()).orElseThrow();
        return ResponseEntity.ok(new AuthResponse(
                tokenOpt.get(),
                user.getId(),
                user.getEmail(),
                user.getFullName(),
                user.getRole().name()
        ));
    }

    // ──────────────────────────────────────────────
    // POST /api/auth/logout
    // ──────────────────────────────────────────────
    @Operation(
        summary = "Sign out",
        description = "Invalidates the current session token. Requires a valid `Authorization: Bearer <token>` header."
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Logged out successfully",
            content = @Content(examples = @ExampleObject(value = """
                { "message": "Logged out successfully." }
            """))),
        @ApiResponse(responseCode = "401", description = "Invalid or expired session")
    })
    @Authorized
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            authService.logout(header.substring(7));
        }
        return ResponseEntity.ok(Map.of("message", "Logged out successfully."));
    }

    // ──────────────────────────────────────────────
    // GET /api/auth/me
    // ──────────────────────────────────────────────
    @Operation(
        summary = "Get current user",
        description = "Returns the authenticated user's profile based on the session token."
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Current user returned",
            content = @Content(schema = @Schema(implementation = AuthResponse.class),
                examples = @ExampleObject(value = """
                    {
                      "token": null,
                      "id": 1,
                      "email": "admin@test.com",
                      "fullName": "Admin User",
                      "role": "ADMIN"
                    }
                """))),
        @ApiResponse(responseCode = "401", description = "Invalid or expired session")
    })
    @Authorized
    @GetMapping("/me")
    public ResponseEntity<?> me(HttpServletRequest request) {
        User user = (User) request.getAttribute("currentUser");
        return ResponseEntity.ok(new AuthResponse(
                null,
                user.getId(),
                user.getEmail(),
                user.getFullName(),
                user.getRole().name()
        ));
    }
}
