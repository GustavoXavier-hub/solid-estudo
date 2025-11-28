package com.exemplo.solid.controller;

import com.exemplo.solid.security.TokenManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/token")
public class TokenController {

    private final TokenManager tokenManager;

    public TokenController(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    @PostMapping("/generate")
    public ResponseEntity<Map<String, String>> generateToken() {
        String token = tokenManager.generateToken();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("type", "Bearer");
        response.put("expiresIn", "24 hours");

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/revoke")
    public ResponseEntity<Map<String, String>> revokeToken(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            tokenManager.revokeToken(token);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Token revogado com sucesso");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.badRequest().body(Map.of("error", "Token não fornecido"));
    }

}
