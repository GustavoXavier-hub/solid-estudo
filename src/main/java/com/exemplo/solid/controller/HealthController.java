package com.exemplo.solid.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Health Check", description = "Endpoint para verificação de saúde da API")
public class HealthController {

    @GetMapping("/ping")
    @Operation(
            summary = "Verificar status da API",
            description = "Endpoint simples para verificar se a API está online e respondendo. " +
                    "Útil para monitoramento e health checks. Este endpoint não requer autenticação."
    )
    @ApiResponse(
            responseCode = "200",
            description = "API está online e funcionando",
            content = @Content(
                    examples = @ExampleObject(
                            name = "API Online",
                            value = "ok"
                    )
            )
    )
    public String ping() {
        return "ok";
    }
}
