package com.exemplo.solid.model.pagamento;

import org.springframework.stereotype.Component;

@Component("pix")
public class PagamentoPix implements Pagamento {
    public void pagar(double valor) {
        System.out.println("⚡ Pagamento de R$" + valor + " via Pix concluído.");
    }
}
