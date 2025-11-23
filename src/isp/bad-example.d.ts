export interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
    getSalary(): number;
    takeBreak(): void;
    attendMeeting(): void;
}
export declare class HumanWorker implements Worker {
    work(): void;
    eat(): void;
    sleep(): void;
    getSalary(): number;
    takeBreak(): void;
    attendMeeting(): void;
}
export declare class RobotWorker implements Worker {
    work(): void;
    eat(): void;
    sleep(): void;
    getSalary(): number;
    takeBreak(): void;
    attendMeeting(): void;
}
export interface MultiFunctionPrinter {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
    copy(document: string): void;
}
export declare class SimplePrinter implements MultiFunctionPrinter {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
    copy(document: string): void;
}
//# sourceMappingURL=bad-example.d.ts.map