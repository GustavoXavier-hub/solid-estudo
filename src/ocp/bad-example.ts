// ❌ VIOLAÇÃO DO OCP: Precisa modificar a classe para adicionar novos tipos

export class PaymentProcessor {
  processPayment(amount: number, type: string): void {
    if (type === 'credit-card') {
      console.log(`Processando pagamento de R$${amount} com cartão de crédito`);
      this.validateCreditCard();
      this.chargeCreditCard(amount);
    } else if (type === 'debit-card') {
      console.log(`Processando pagamento de R$${amount} com cartão de débito`);
      this.validateDebitCard();
      this.chargeDebitCard(amount);
    } else if (type === 'paypal') {
      console.log(`Processando pagamento de R$${amount} com PayPal`);
      this.authenticatePayPal();
      this.chargePayPal(amount);
    } else if (type === 'pix') {
      // Toda vez que adicionar um novo método, preciso modificar esta classe
      console.log(`Processando pagamento de R$${amount} com PIX`);
      this.generatePixCode();
      this.chargePix(amount);
    }
  }

  private validateCreditCard(): void {
    console.log('Validando cartão de crédito...');
  }

  private chargeCreditCard(amount: number): void {
    console.log(`Cobrando R$${amount} no cartão de crédito`);
  }

  private validateDebitCard(): void {
    console.log('Validando cartão de débito...');
  }

  private chargeDebitCard(amount: number): void {
    console.log(`Cobrando R$${amount} no cartão de débito`);
  }

  private authenticatePayPal(): void {
    console.log('Autenticando no PayPal...');
  }

  private chargePayPal(amount: number): void {
    console.log(`Cobrando R$${amount} via PayPal`);
  }

  private generatePixCode(): void {
    console.log('Gerando código PIX...');
  }

  private chargePix(amount: number): void {
    console.log(`Cobrando R$${amount} via PIX`);
  }
}

// Uso
const processor = new PaymentProcessor();
processor.processPayment(100, 'credit-card');
processor.processPayment(200, 'pix');
