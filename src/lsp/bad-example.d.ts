export declare class Rectangle {
    protected width: number;
    protected height: number;
    constructor(width: number, height: number);
    setWidth(width: number): void;
    setHeight(height: number): void;
    getWidth(): number;
    getHeight(): number;
    getArea(): number;
}
export declare class Square extends Rectangle {
    constructor(size: number);
    setWidth(width: number): void;
    setHeight(height: number): void;
}
//# sourceMappingURL=bad-example.d.ts.map