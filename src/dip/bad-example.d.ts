export declare class MySQLDatabase {
    connect(): void;
    saveData(data: string): void;
}
export declare class EmailNotifier {
    sendEmail(message: string): void;
}
export declare class UserService {
    private database;
    private notifier;
    constructor();
    createUser(name: string): void;
}
export declare class PostgreSQLDatabase {
    connect(): void;
    save(data: string): void;
}
//# sourceMappingURL=bad-example.d.ts.map