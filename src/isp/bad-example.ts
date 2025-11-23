// ❌ VIOLAÇÃO DO ISP: Interface "gorda" com muitos métodos

export interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  getSalary(): number;
  takeBreak(): void;
  attendMeeting(): void;
}

// Trabalhador humano - implementa todos os métodos
export class HumanWorker implements Worker {
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

// Robô - forçado a implementar métodos que não fazem sentido
export class RobotWorker implements Worker {
  work(): void {
    console.log('Robô trabalhando...');
  }

  // Métodos sem sentido para um robô
  eat(): void {
    throw new Error('Robôs não comem!');
  }

  sleep(): void {
    throw new Error('Robôs não dormem!');
  }

  getSalary(): number {
    throw new Error('Robôs não recebem salário!');
  }

  takeBreak(): void {
    throw new Error('Robôs não fazem pausas!');
  }

  attendMeeting(): void {
    throw new Error('Robôs não participam de reuniões!');
  }
}

// Outro exemplo: Interface de impressora "gorda"
export interface MultiFunctionPrinter {
  print(document: string): void;
  scan(document: string): void;
  fax(document: string): void;
  copy(document: string): void;
}

// Impressora simples forçada a implementar funções que não tem
export class SimplePrinter implements MultiFunctionPrinter {
  print(document: string): void {
    console.log(`Imprimindo: ${document}`);
  }

  scan(document: string): void {
    throw new Error('Esta impressora não tem scanner!');
  }

  fax(document: string): void {
    throw new Error('Esta impressora não tem fax!');
  }

  copy(document: string): void {
    throw new Error('Esta impressora não pode copiar!');
  }
}

// Uso
const human = new HumanWorker();
human.work();
human.eat();

const robot = new RobotWorker();
robot.work();
// robot.eat(); // Lança erro!
