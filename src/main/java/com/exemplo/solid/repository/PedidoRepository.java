package com.exemplo.solid.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.exemplo.solid.model.Pedido;

    @Repository
    public interface PedidoRepository extends MongoRepository<Pedido, String> {
    }

