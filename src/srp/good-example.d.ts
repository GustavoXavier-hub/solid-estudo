export declare class User {
    name: string;
    email: string;
    constructor(name: string, email: string);
}
export declare class UserValidator {
    validate(user: User): boolean;
}
export declare class UserRepository {
    save(user: User): void;
    findByEmail(email: string): User | null;
}
export declare class EmailService {
    sendWelcomeEmail(user: User): void;
}
export declare class UserReportGenerator {
    generate(user: User): string;
}
//# sourceMappingURL=good-example.d.ts.map