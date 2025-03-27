import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindOneOrderDto } from './dto/find-one-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        order: {
            OrderItem: {
                title: string;
                imageUrl: string;
                price: number;
                quantity: number;
                productId: string;
            }[];
            discounts: any;
            id: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.OrderStatus;
            stripeChargeId: string | null;
            receiptUrl: string | null;
            totalAmount: number;
            totalItems: number;
            buyerUserId: string;
            paid: boolean;
            paidAt: Date | null;
            updateAt: Date;
        };
        paymentSession: {
            cancelUrl: string | null;
            successUrl: string | null;
            url: string | null;
        };
    }>;
    findOne({ orderId }: FindOneOrderDto): Promise<{
        OrderItem: {
            id: string;
            price: number;
            orderId: string | null;
            quantity: number;
            productId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        stripeChargeId: string | null;
        receiptUrl: string | null;
        totalAmount: number;
        totalItems: number;
        buyerUserId: string;
        paid: boolean;
        paidAt: Date | null;
        updateAt: Date;
    }>;
}
