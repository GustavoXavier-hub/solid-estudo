// ✅ SEGUINDO O ISP: Interfaces segregadas e específicas

// Interfaces pequenas e específicas
export interface Workable {
  work(): void;
}

export interface Eatable {
  eat(): void;
}

export interface Sleepable {
  sleep(): void;
}

export interface Payable {
  getSalary(): number;
}

export interface Breakable {
  takeBreak(): void;
}

export interface MeetingAttendee {
  attendMeeting(): void;
}

// Trabalhador humano implementa apenas o que precisa
export class HumanWorker implements Workable, Eatable, Sleepable, Payable, Breakable, MeetingAttendee {
  work(): void {
    console.log('Trabalhando...');
  }

  eat(): void {
    console.log('Comendo...');
  }

  sleep(): void {
    console.log('Dormindo...');
  }

  getSalary(): number {
    return 5000;
  }

  takeBreak(): void {
    console.log('Fazendo pausa...');
  }

  attendMeeting(): void {
    console.log('Participando da reunião...');
  }
}

// Robô implementa apenas o que faz sentido
export class RobotWorker implements Workable {
  work(): void {
    console.log('Robô trabalhando 24/7...');
  }
}

// Gerente de equipe
export class Manager implements Workable, Eatable, Sleepable, Payable, MeetingAttendee {
  work(): void {
    console.log('Gerenciando equipe...');
  }

  eat(): void {
    console.log('Almoço de negócios...');
  }

  sleep(): void {
    console.log('Descansando...');
  }

  getSalary(): number {
    return 10000;
  }

  attendMeeting(): void {
    console.log('Liderando reunião...');
  }
}

// Exemplo com impressoras: interfaces segregadas
export interface Printer {
  print(document: string): void;
}

export interface Scanner {
  scan(document: string): void;
}

export interface Fax {
  fax(document: string): void;
}

export interface Copier {
  copy(document: string): void;
}

// Impressora simples - apenas imprime
export class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimindo: ${document}`);
  }
}

// Impressora multifuncional - implementa todas as interfaces
export class AllInOnePrinter implements Printer, Scanner, Fax, Copier {
  print(document: string): void {
    console.log(`Imprimindo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }

  fax(document: string): void {
    console.log(`Enviando fax: ${document}`);
  }

  copy(document: string): void {
    console.log(`Copiando: ${document}`);
  }
}

// Impressora com scanner - implementa apenas o que tem
export class PrinterScanner implements Printer, Scanner {
  print(document: string): void {
    console.log(`Imprimindo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }
}

// Uso
const human = new HumanWorker();
human.work();
human.eat();

const robot = new RobotWorker();
robot.work();
// robot não tem método eat() - correto!

const simple = new SimplePrinter();
simple.print('documento.pdf');
// simple não tem método scan() - correto!

const allInOne = new AllInOnePrinter();
allInOne.print('documento.pdf');
allInOne.scan('documento.pdf');
