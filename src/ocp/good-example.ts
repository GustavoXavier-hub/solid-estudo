// ✅ SEGUINDO O OCP: Aberto para extensão, fechado para modificação

// Interface para métodos de pagamento
export interface PaymentMethod {
  processPayment(amount: number): void;
}

// Implementações específicas de cada método de pagamento
export class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} com cartão de crédito`);
    this.validateCard();
    this.charge(amount);
  }

  private validateCard(): void {
    console.log('Validando cartão de crédito...');
  }

  private charge(amount: number): void {
    console.log(`Cobrando R$${amount} no cartão de crédito`);
  }
}

export class DebitCardPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} com cartão de débito`);
    this.validateCard();
    this.charge(amount);
  }

  private validateCard(): void {
    console.log('Validando cartão de débito...');
  }

  private charge(amount: number): void {
    console.log(`Cobrando R$${amount} no cartão de débito`);
  }
}

export class PayPalPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} com PayPal`);
    this.authenticate();
    this.charge(amount);
  }

  private authenticate(): void {
    console.log('Autenticando no PayPal...');
  }

  private charge(amount: number): void {
    console.log(`Cobrando R$${amount} via PayPal`);
  }
}

export class PixPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} com PIX`);
    this.generateCode();
    this.charge(amount);
  }

  private generateCode(): void {
    console.log('Gerando código PIX...');
  }

  private charge(amount: number): void {
    console.log(`Cobrando R$${amount} via PIX`);
  }
}

// Classe processadora que não precisa ser modificada
export class PaymentProcessor {
  processPayment(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.processPayment(amount);
  }
}

// Uso: Para adicionar novos métodos, apenas criamos novas classes
const processor = new PaymentProcessor();
processor.processPayment(new CreditCardPayment(), 100);
processor.processPayment(new PixPayment(), 200);

// Novo método: Boleto (sem modificar código existente!)
export class BoletoPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} com Boleto`);
    this.generateBarcode();
    this.charge(amount);
  }

  private generateBarcode(): void {
    console.log('Gerando código de barras...');
  }

  private charge(amount: number): void {
    console.log(`Gerando boleto de R$${amount}`);
  }
}

processor.processPayment(new BoletoPayment(), 300);
