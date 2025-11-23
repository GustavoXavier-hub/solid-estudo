// ❌ VIOLAÇÃO DO DIP: Dependência direta em implementações concretas

// Módulos de baixo nível (detalhes)
export class MySQLDatabase {
  connect(): void {
    console.log('Conectando ao MySQL...');
  }

  saveData(data: string): void {
    console.log(`Salvando no MySQL: ${data}`);
  }
}

export class EmailNotifier {
  sendEmail(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

// Módulo de alto nível dependendo diretamente de implementações concretas
export class UserService {
  private database: MySQLDatabase;
  private notifier: EmailNotifier;

  constructor() {
    // Acoplamento forte - difícil de testar e mudar
    this.database = new MySQLDatabase();
    this.notifier = new EmailNotifier();
  }

  createUser(name: string): void {
    console.log(`Criando usuário: ${name}`);
    
    // Depende diretamente de MySQLDatabase
    this.database.connect();
    this.database.saveData(name);
    
    // Depende diretamente de EmailNotifier
    this.notifier.sendEmail(`Bem-vindo, ${name}!`);
  }
}

// Problemas:
// 1. Não podemos mudar para PostgreSQL sem modificar UserService
// 2. Não podemos mudar para SMS sem modificar UserService
// 3. Difícil de testar - precisa de MySQL real
// 4. UserService está acoplado a implementações específicas

// Uso
const userService = new UserService();
userService.createUser('João');

// Para trocar de banco, teríamos que modificar UserService!
export class PostgreSQLDatabase {
  connect(): void {
    console.log('Conectando ao PostgreSQL...');
  }

  save(data: string): void {
    console.log(`Salvando no PostgreSQL: ${data}`);
  }
}

// Não conseguimos usar PostgreSQLDatabase sem modificar UserService
