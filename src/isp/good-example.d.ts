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
export declare class HumanWorker implements Workable, Eatable, Sleepable, Payable, Breakable, MeetingAttendee {
    work(): void;
    eat(): void;
    sleep(): void;
    getSalary(): number;
    takeBreak(): void;
    attendMeeting(): void;
}
export declare class RobotWorker implements Workable {
    work(): void;
}
export declare class Manager implements Workable, Eatable, Sleepable, Payable, MeetingAttendee {
    work(): void;
    eat(): void;
    sleep(): void;
    getSalary(): number;
    attendMeeting(): void;
}
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
export declare class SimplePrinter implements Printer {
    print(document: string): void;
}
export declare class AllInOnePrinter implements Printer, Scanner, Fax, Copier {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
    copy(document: string): void;
}
export declare class PrinterScanner implements Printer, Scanner {
    print(document: string): void;
    scan(document: string): void;
}
//# sourceMappingURL=good-example.d.ts.map