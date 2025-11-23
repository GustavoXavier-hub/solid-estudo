package com.exemplo.solid.service;

import com.exemplo.solid.model.Pedido;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PedidoService {

    Pedido criar (Pedido pedido);
    List<Pedido> listarTodos();
    Optional<Pedido> buscarPorId(String id);
    Pedido atualizar(String id, Pedido pedido);
    void deletar(String id);
}
