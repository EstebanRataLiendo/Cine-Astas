import { RawBodyRequest } from '@nestjs/common';
import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    webhook(signature: string, req: RawBodyRequest<Request>): Promise<{
        message: string;
        signature: string;
    }>;
}
