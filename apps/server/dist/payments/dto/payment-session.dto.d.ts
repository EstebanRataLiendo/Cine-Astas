export declare class PaymentSessionDto {
    orderId: string;
    currency: string;
    items: PaymentSessionItemDto[];
    discounts?: Discount[];
}
export declare class Discount {
    coupon: string;
}
export declare class PaymentSessionItemDto {
    imageUrl?: string;
    name: string;
    price: number;
    quantity: number;
}
