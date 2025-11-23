// ❌ VIOLAÇÃO DO SRP: Classe com múltiplas responsabilidades

export class User {
  constructor(
    public name: string,
    public email: string
  ) {}

  // Responsabilidade 1: Validação de dados
  validate(): boolean {
    if (!this.name || this.name.length < 3) {
      return false;
    }
    if (!this.email || !this.email.includes('@')) {
      return false;
    }
    return true;
  }

  // Responsabilidade 2: Persistência de dados
  save(): void {
    console.log(`Salvando usuário ${this.name} no banco de dados...`);
    // Lógica de salvamento
  }

  // Responsabilidade 3: Envio de email
  sendWelcomeEmail(): void {
    console.log(`Enviando email de boas-vindas para ${this.email}...`);
    // Lógica de envio de email
  }

  // Responsabilidade 4: Geração de relatórios
  generateReport(): string {
    return `Relatório do usuário: ${this.name} (${this.email})`;
  }
}

// Uso
const user = new User('João Silva', 'joao@example.com');
user.validate();
user.save();
user.sendWelcomeEmail();
console.log(user.generateReport());
