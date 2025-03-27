import { CreateOrderDto } from "./dto/create-order.dto";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentsService } from "../payments/payments.service";
import { OrderStatus } from "@prisma/client";
import { ScreeningService } from "../screening/screening.service";
interface OrderWithProducts {
    OrderItem: {
        title: any;
        price: number;
        productId: string;
        quantity: number;
        imageUrl?: string;
        seatIds?: string[];
    }[];
    id: string;
    totalAmount: number;
    totalItems: number;
    status: OrderStatus;
    paid: boolean;
    paidAt: Date | null;
    createdAt: Date;
    updateAt: Date;
    discounts: any;
}
export declare class OrdersService {
    private readonly screeningService;
    private readonly paymentService;
    private readonly prismaService;
    constructor(screeningService: ScreeningService, paymentService: PaymentsService, prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
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
    }>;
    private validateSeatsAvailability;
    createPaymentSession(order: OrderWithProducts): Promise<{
        cancelUrl: string | null;
        successUrl: string | null;
        url: string | null;
    }>;
    findOne(id: string): Promise<{
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
export {};
