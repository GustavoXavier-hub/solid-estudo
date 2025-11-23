package com.exemplo.solid.model.pagamento;

import org.springframework.stereotype.Component;

@Component("cartao")
public class PagamentoCartao implements Pagamento {
    public void pagar(double valor) {
        System.out.println("💳 Pagamento de R$" + valor + " com cartão aprovado.");
    }
}
