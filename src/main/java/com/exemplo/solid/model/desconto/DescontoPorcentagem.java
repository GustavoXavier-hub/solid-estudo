package com.exemplo.solid.model.desconto;

import org.springframework.stereotype.Component;

@Component("porcentagem")
public class DescontoPorcentagem extends Desconto {
    public double aplicar(double valor) {
        return valor * 0.9;
    }
}
