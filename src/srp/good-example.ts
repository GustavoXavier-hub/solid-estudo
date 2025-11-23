// ✅ SEGUINDO O SRP: Cada classe tem uma única responsabilidade

// Responsabilidade 1: Representação do usuário
export class User {
  constructor(
    public name: string,
    public email: string
  ) {}
}

// Responsabilidade 2: Validação de usuários
export class UserValidator {
  validate(user: User): boolean {
    if (!user.name || user.name.length < 3) {
      return false;
    }
    if (!user.email || !user.email.includes('@')) {
      return false;
    }
    return true;
  }
}

// Responsabilidade 3: Persistência de usuários
export class UserRepository {
  save(user: User): void {
    console.log(`Salvando usuário ${user.name} no banco de dados...`);
    // Lógica de salvamento
  }

  findByEmail(email: string): User | null {
    console.log(`Buscando usuário por email: ${email}`);
    // Lógica de busca
    return null;
  }
}

// Responsabilidade 4: Serviço de email
export class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`Enviando email de boas-vindas para ${user.email}...`);
    // Lógica de envio de email
  }
}

// Responsabilidade 5: Geração de relatórios
export class UserReportGenerator {
  generate(user: User): string {
    return `Relatório do usuário: ${user.name} (${user.email})`;
  }
}

// Uso
const user = new User('João Silva', 'joao@example.com');
const validator = new UserValidator();
const repository = new UserRepository();
const emailService = new EmailService();
const reportGenerator = new UserReportGenerator();

if (validator.validate(user)) {
  repository.save(user);
  emailService.sendWelcomeEmail(user);
  console.log(reportGenerator.generate(user));
}
