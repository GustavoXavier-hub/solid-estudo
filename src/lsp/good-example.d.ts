export interface Shape {
    getArea(): number;
    getPerimeter(): number;
}
export declare class Rectangle implements Shape {
    private width;
    private height;
    constructor(width: number, height: number);
    setWidth(width: number): void;
    setHeight(height: number): void;
    getWidth(): number;
    getHeight(): number;
    getArea(): number;
    getPerimeter(): number;
}
export declare class Square implements Shape {
    private size;
    constructor(size: number);
    setSize(size: number): void;
    getSize(): number;
    getArea(): number;
    getPerimeter(): number;
}
export declare abstract class Bird {
    abstract makeSound(): void;
    abstract move(): void;
}
export declare class Sparrow extends Bird {
    makeSound(): void;
    move(): void;
}
export declare class Penguin extends Bird {
    makeSound(): void;
    move(): void;
}
//# sourceMappingURL=good-example.d.ts.map