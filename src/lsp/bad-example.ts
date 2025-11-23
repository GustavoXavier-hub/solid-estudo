// ❌ VIOLAÇÃO DO LSP: Subclasse quebra o comportamento esperado

export class Rectangle {
  constructor(protected width: number, protected height: number) {}

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
}

// Quadrado é um retângulo? Matematicamente sim, mas na programação...
export class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }

  // Violação: Quadrado precisa manter width e height iguais
  setWidth(width: number): void {
    this.width = width;
    this.height = width; // Altera comportamento da classe base
  }

  setHeight(height: number): void {
    this.width = height; // Altera comportamento da classe base
    this.height = height;
  }
}

// Função que espera um Rectangle
function calculateArea(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  
  // Esperamos 20, mas com Square será 16 (4*4)
  console.log(`Área esperada: 20`);
  console.log(`Área calculada: ${rectangle.getArea()}`);
}

// Uso
const rect = new Rectangle(2, 3);
calculateArea(rect); // Funciona corretamente: 20

const square = new Square(2);
calculateArea(square); // Quebra: esperava 20, obtém 16
