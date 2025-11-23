export interface Database {
    connect(): void;
    save(data: string): void;
}
export interface Notifier {
    notify(message: string): void;
}
export declare class UserService {
    private database;
    private notifier;
    constructor(database: Database, notifier: Notifier);
    createUser(name: string): void;
}
export declare class MySQLDatabase implements Database {
    connect(): void;
    save(data: string): void;
}
export declare class PostgreSQLDatabase implements Database {
    connect(): void;
    save(data: string): void;
}
export declare class MongoDBDatabase implements Database {
    connect(): void;
    save(data: string): void;
}
export declare class EmailNotifier implements Notifier {
    notify(message: string): void;
}
export declare class SMSNotifier implements Notifier {
    notify(message: string): void;
}
export declare class PushNotifier implements Notifier {
    notify(message: string): void;
}
export declare class MockDatabase implements Database {
    connect(): void;
    save(data: string): void;
}
export declare class MockNotifier implements Notifier {
    notify(message: string): void;
}
//# sourceMappingURL=good-example.d.ts.map