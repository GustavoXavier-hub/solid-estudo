package com.exemplo.solid.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Dados para atualizar um pedido")
public class PedidoUpdateDTO {

    @Schema(description = "Nome do cliente", example = "Maria Santos")
    private String cliente;

    @Schema(description = "Valor do pedido", example = "150.00")
    private double valor;
}
