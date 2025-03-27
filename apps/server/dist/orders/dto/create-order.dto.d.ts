export declare class OrderItemDto {
    productId: string;
    seatIds: string[];
}
export declare class CreateOrderDto {
    items: OrderItemDto[];
    buyerUserId: string;
    discounts?: any;
}
