package com.exemplo.solid.controller;

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
    public Pedido criarPedido(@RequestBody Pedido pedido) {
        return service.criar(pedido);
    }

    @GetMapping
    public List<Pedido> listarPedidos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPedido(@PathVariable("id") String id) {
        id = id.trim();
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable("id") String id,
                                                  @RequestBody Pedido pedido) {
        id = id.trim();
        Pedido atualizado = service.atualizar(id, pedido);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public String deletarPedido(@PathVariable("id") String id) {
        id = id.trim();
        service.deletar(id);
        return "Pedido deletado com sucesso";
    }
}
