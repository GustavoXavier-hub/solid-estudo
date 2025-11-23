package com.exemplo.solid.service.impl;

import com.exemplo.solid.model.Pedido;
import com.exemplo.solid.repository.PedidoRepository;
import com.exemplo.solid.service.PedidoService;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoServiceImpl implements PedidoService {
    private final PedidoRepository repository;


    public PedidoServiceImpl(PedidoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Pedido criar(Pedido pedido) {
        return repository.save(pedido);
    }

    @Override
    public List<Pedido> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Pedido> buscarPorId(String id) {
        return repository.findById(id);
    }

    @Override
    public Pedido atualizar(String id, Pedido pedido) {
        if (repository.existsById(id)) {
            pedido.setId(id);
            return repository.save(pedido);
        }
        throw new RuntimeException("Pedido não encontrado");
    }

    @Override
    public void deletar(String id) {
        repository.deleteById(id);
    }
}
