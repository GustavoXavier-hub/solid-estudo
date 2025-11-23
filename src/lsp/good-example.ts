// ✅ SEGUINDO O LSP: Design que respeita a substituibilidade

// Interface base para formas
export interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

// Rectangle implementa Shape de forma independente
export class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number
  ) {}

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Square implementa Shape de forma independente
export class Square implements Shape {
  constructor(private size: number) {}

  setSize(size: number): void {
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }

  getArea(): number {
    return this.size * this.size;
  }

  getPerimeter(): number {
    return 4 * this.size;
  }
}

// Função genérica que trabalha com qualquer Shape
function printShapeInfo(shape: Shape): void {
  console.log(`Área: ${shape.getArea()}`);
  console.log(`Perímetro: ${shape.getPerimeter()}`);
}

// Uso
const rect = new Rectangle(5, 4);
rect.setWidth(5);
rect.setHeight(4);
printShapeInfo(rect); // Área: 20, Perímetro: 18

const square = new Square(4);
square.setSize(4);
printShapeInfo(square); // Área: 16, Perímetro: 16

// Ambos funcionam corretamente sem surpresas!

// Outro exemplo: classe base com contrato bem definido
export abstract class Bird {
  abstract makeSound(): void;
  abstract move(): void;
}

export class Sparrow extends Bird {
  makeSound(): void {
    console.log('Piu piu!');
  }

  move(): void {
    console.log('Voando...');
  }
}

export class Penguin extends Bird {
  makeSound(): void {
    console.log('Quack quack!');
  }

  move(): void {
    console.log('Nadando...'); // Pinguim não voa, mas move de outra forma
  }
}

function interactWithBird(bird: Bird): void {
  bird.makeSound();
  bird.move();
}

// Ambos funcionam corretamente
interactWithBird(new Sparrow());
interactWithBird(new Penguin());
