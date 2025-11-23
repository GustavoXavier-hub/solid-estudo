// ✅ SEGUINDO O DIP: Dependendo de abstrações

// Abstrações (interfaces)
export interface Database {
  connect(): void;
  save(data: string): void;
}

export interface Notifier {
  notify(message: string): void;
}

// Módulo de alto nível dependendo de abstrações
export class UserService {
  constructor(
    private database: Database,
    private notifier: Notifier
  ) {}

  createUser(name: string): void {
    console.log(`Criando usuário: ${name}`);
    
    this.database.connect();
    this.database.save(name);
    this.notifier.notify(`Bem-vindo, ${name}!`);
  }
}

// Implementações concretas (detalhes)
export class MySQLDatabase implements Database {
  connect(): void {
    console.log('Conectando ao MySQL...');
  }

  save(data: string): void {
    console.log(`Salvando no MySQL: ${data}`);
  }
}

export class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log('Conectando ao PostgreSQL...');
  }

  save(data: string): void {
    console.log(`Salvando no PostgreSQL: ${data}`);
  }
}

export class MongoDBDatabase implements Database {
  connect(): void {
    console.log('Conectando ao MongoDB...');
  }

  save(data: string): void {
    console.log(`Salvando no MongoDB: ${data}`);
  }
}

export class EmailNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

export class SMSNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

export class PushNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Enviando push notification: ${message}`);
  }
}

// Mock para testes
export class MockDatabase implements Database {
  connect(): void {
    console.log('Mock: Conectado');
  }

  save(data: string): void {
    console.log(`Mock: Salvando ${data}`);
  }
}

export class MockNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Mock: Notificando ${message}`);
  }
}

// Uso: Podemos trocar implementações facilmente
console.log('--- Usando MySQL e Email ---');
const service1 = new UserService(
  new MySQLDatabase(),
  new EmailNotifier()
);
service1.createUser('João');

console.log('\n--- Usando PostgreSQL e SMS ---');
const service2 = new UserService(
  new PostgreSQLDatabase(),
  new SMSNotifier()
);
service2.createUser('Maria');

console.log('\n--- Usando MongoDB e Push ---');
const service3 = new UserService(
  new MongoDBDatabase(),
  new PushNotifier()
);
service3.createUser('Pedro');

console.log('\n--- Teste com Mocks ---');
const testService = new UserService(
  new MockDatabase(),
  new MockNotifier()
);
testService.createUser('Teste');

// Vantagens:
// 1. Fácil trocar implementações sem modificar UserService
// 2. Fácil testar com mocks
// 3. UserService não conhece detalhes de implementação
// 4. Código mais flexível e manutenível
