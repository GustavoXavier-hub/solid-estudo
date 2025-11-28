package com.exemplo.solid.controller;

import com.exemplo.solid.dto.PedidoUpdateDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.exemplo.solid.model.Pedido;
import com.exemplo.solid.service.PedidoService;

import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    private final PedidoService service;

    public PedidoController(PedidoService service) {
        this.service = service;
    }

    @PostMapping
    @Operation(
            summary = "Criar novo pedido",
            description = "Cria um novo pedido no sistema"
    )
    @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Dados do pedido a ser criado",
            required = true,
            content = @Content(
                    schema = @Schema(implementation = PedidoUpdateDTO.class),
                    examples = @ExampleObject(
                            name = "Exemplo de Pedido",
                            value = """
                    {
                      "cliente": "João Silva",
                      "valor": 250.50
                    }
                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Pedido criado com sucesso",
            content = @Content(
                    schema = @Schema(implementation = Pedido.class),
                    examples = @ExampleObject(
                            name = "Pedido Criado",
                            value = """
                    {
                      "id": "674948c8e5f2a123456789ab",
                      "cliente": "João Silva",
                      "valor": 250.50
                    }
                    """
                    )
            )
    )
    public Pedido criarPedido(@RequestBody PedidoUpdateDTO dto) {
        Pedido pedido = new Pedido();
        pedido.setCliente(dto.getCliente());
        pedido.setValor(dto.getValor());
        return service.criar(pedido);
    }

    @GetMapping
    @Operation(
            summary = "Listar todos os pedidos",
            description = "Retorna uma lista com todos os pedidos cadastrados"
    )
    @ApiResponse(
            responseCode = "200",
            description = "Lista de pedidos retornada com sucesso",
            content = @Content(
                    schema = @Schema(implementation = Pedido.class),
                    examples = @ExampleObject(
                            name = "Lista de Pedidos",
                            value = """
                    [
                      {
                        "id": "674948c8e5f2a123456789ab",
                        "cliente": "João Silva",
                        "valor": 250.50
                      },
                      {
                        "id": "674948c8e5f2a987654321cd",
                        "cliente": "Maria Santos",
                        "valor": 150.00
                      }
                    ]
                    """
                    )
            )
    )
    public List<Pedido> listarPedidos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Buscar pedido por ID",
            description = "Retorna um pedido específico pelo seu ID"
    )
    @Parameter(
            name = "id",
            description = "ID do pedido",
            example = "674948c8e5f2a123456789fg",
            required = true
    )
    @ApiResponse(
            responseCode = "200",
            description = "Pedido encontrado",
            content = @Content(
                    schema = @Schema(implementation = Pedido.class),
                    examples = @ExampleObject(
                            name = "Pedido Encontrado",
                            value = """
                    {
                      "id": "674948c8e5f2a123456789ab",
                      "cliente": "João Silva",
                      "valor": 250.50
                    }
                    """
                    )
            )
    )
    @ApiResponse(responseCode = "404", description = "Pedido não encontrado")
    public ResponseEntity<Pedido> buscarPedido(@PathVariable("id") String id) {
        id = id.trim();
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    @Operation(
            summary = "Atualizar pedido",
            description = "Atualiza os dados de um pedido existente"
    )
    @Parameter(
            name = "id",
            description = "ID do pedido a ser atualizado",
            example = "674948c8e5f2a123456789ab",
            required = true
    )
    @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Novos dados do pedido",
            required = true,
            content = @Content(
                    schema = @Schema(implementation = PedidoUpdateDTO.class),
                    examples = @ExampleObject(
                            name = "Dados de Atualização",
                            value = """
                    {
                      "cliente": "João Silva",
                      "valor": 300.00
                    }
                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Pedido atualizado com sucesso",
            content = @Content(
                    schema = @Schema(implementation = Pedido.class),
                    examples = @ExampleObject(
                            name = "Pedido Atualizado",
                            value = """
                    {
                      "id": "674948c8e5f2a123456789ab",
                      "cliente": "João Silva (Atualizado)",
                      "valor": 300.00
                    }
                    """
                    )
            )
    )
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable("id") String id,
                                                  @RequestBody PedidoUpdateDTO dto) {
        id = id.trim();

        Pedido pedido = new Pedido();
        pedido.setCliente(dto.getCliente());
        pedido.setValor(dto.getValor());

        Pedido atualizado = service.atualizar(id, pedido);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Deletar pedido",
            description = "Remove um pedido do sistema"
    )
    @Parameter(
            name = "id",
            description = "ID do pedido a ser deletado",
            example = "674948c8e5f2a123456789cg",
            required = true
    )
    @ApiResponse(
            responseCode = "200",
            description = "Pedido deletado com sucesso",
            content = @Content(
                    examples = @ExampleObject(
                            value = "Pedido deletado com sucesso"
                    )
            )
    )
    public ResponseEntity<String> deletarPedido(@PathVariable("id") String id) {
        id = id.trim();
        service.deletar(id);
        return ResponseEntity.ok("Pedido deletado com sucesso");
    }
}
