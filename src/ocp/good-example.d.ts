export interface PaymentMethod {
    processPayment(amount: number): void;
}
export declare class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void;
    private validateCard;
    private charge;
}
export declare class DebitCardPayment implements PaymentMethod {
    processPayment(amount: number): void;
    private validateCard;
    private charge;
}
export declare class PayPalPayment implements PaymentMethod {
    processPayment(amount: number): void;
    private authenticate;
    private charge;
}
export declare class PixPayment implements PaymentMethod {
    processPayment(amount: number): void;
    private generateCode;
    private charge;
}
export declare class PaymentProcessor {
    processPayment(paymentMethod: PaymentMethod, amount: number): void;
}
export declare class BoletoPayment implements PaymentMethod {
    processPayment(amount: number): void;
    private generateBarcode;
    private charge;
}
//# sourceMappingURL=good-example.d.ts.map