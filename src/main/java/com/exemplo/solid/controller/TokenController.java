package com.exemplo.solid.controller;

import com.exemplo.solid.security.TokenManager;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/token")
@Tag(name = "Token", description = "API para gerenciamento de tokens de autenticação")
public class TokenController {

    private final TokenManager tokenManager;

    public TokenController(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    @PostMapping("/generate")
    @Operation(
            summary = "Gerar novo token",
            description = "Gera um token de acesso único e aleatório válido por 24 horas. " +
                    "Este token deve ser usado no header Authorization de todas as requisições protegidas."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Token gerado com sucesso",
            content = @Content(
                    examples = @ExampleObject(
                            name = "Token Gerado",
                            value = """
                    {
                      "token": "xK9mP2nQ7rT4vW8zB1cD5fG6hJ0lM3nP4qR7sT9uV2wX",
                      "type": "Bearer",
                      "expiresIn": "24 hours"
                    }
                    """
                    )
            )
    )
    public ResponseEntity<Map<String, String>> generateToken() {
        String token = tokenManager.generateToken();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("type", "Bearer");
        response.put("expiresIn", "24 hours");

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/revoke")
    @Operation(
            summary = "Revogar token",
            description = "Revoga (invalida) um token de acesso. Após a revogação, o token não poderá mais ser usado.",
            security = @SecurityRequirement(name = "Bearer Authentication")
    )
    @Parameter(
            name = "Authorization",
            description = "Token no formato: Bearer {seu-token}",
            required = true,
            example = "Bearer xK9mP2nQ7rT4vW8zB1cD5fG6hJ0lM3nP4qR7sT9uV2wX"
    )
    @ApiResponse(
            responseCode = "200",
            description = "Token revogado com sucesso",
            content = @Content(
                    examples = @ExampleObject(
                            name = "Sucesso",
                            value = """
                    {
                      "message": "Token revogado com sucesso"
                    }
                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            description = "Token não fornecido ou formato inválido",
            content = @Content(
                    examples = @ExampleObject(
                            name = "Erro",
                            value = """
                    {
                      "error": "Token não fornecido"
                    }
                    """
                    )
            )
    )
    public ResponseEntity<Map<String, String>> revokeToken(
            @RequestHeader("Authorization") String authHeader) {

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
