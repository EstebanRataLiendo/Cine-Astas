import { PaymentSessionDto } from './dto/payment-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PaymentsService {
    private readonly prismaService;
    private stripe;
    constructor(prismaService: PrismaService);
    createPaymentSession(paymentSessionDto: PaymentSessionDto): Promise<{
        cancelUrl: string | null;
        successUrl: string | null;
        url: string | null;
    }>;
    stripeWebhook({ signature, rawBody }: {
        signature: string;
        rawBody: Buffer<ArrayBufferLike>;
    }): Promise<{
        message: string;
        signature: string;
    }>;
    private paidOrder;
}
