package com.exemplo.solid.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "pedido")
@Schema(description = "Representa um pedido no sistema")
public class Pedido {


    @MongoId
    @JsonSerialize(using = ToStringSerializer.class)
    @Schema(description = "ID único do pedido", example = "674948c8e5f2a123456789ab")
    private String  id;

    @Schema(description = "Nome do cliente", example = "João Silva")
    private String cliente;

    @Schema(description = "Valor do pedido", example = "250.50")
    private double valor;
}
