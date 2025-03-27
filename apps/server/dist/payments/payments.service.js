"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const envs_1 = require("./config/envs");
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.stripe = new stripe_1.default(envs_1.envs.STRIPE_SECRET_KEY);
    }
    async createPaymentSession(paymentSessionDto) {
        const { currency, items, orderId, discounts } = paymentSessionDto;
        try {
            const lineItems = items.map((item) => {
                const line = {
                    price_data: {
                        currency,
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price
                    },
                    quantity: item.quantity,
                };
                if (item.imageUrl && item.imageUrl.trim().length > 0) {
                    line.price_data.product_data.images = [item.imageUrl];
                }
                return line;
            });
            const session = await this.stripe.checkout.sessions.create({
                payment_intent_data: {
                    metadata: { orderId },
                },
                discounts,
                line_items: lineItems,
                mode: 'payment',
                success_url: envs_1.envs.STRIPE_SUCCESS_URL,
                cancel_url: envs_1.envs.STRIPE_CANCEL_URL,
            });
            return {
                cancelUrl: session.cancel_url,
                successUrl: session.success_url,
                url: session.url
            };
        }
        catch (error) {
            throw error;
        }
    }
    async stripeWebhook({ signature, rawBody }) {
        let event;
        const endpointSecret = envs_1.envs.STRIPE_ENDPOINT_SECRET;
        try {
            event = this.stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
        }
        catch (error) {
            throw error;
        }
        switch (event.type) {
            case 'charge.succeeded':
                const chargeSucceeded = event.data.object;
                const payload = {
                    stripeChargeId: chargeSucceeded.id,
                    orderId: chargeSucceeded.metadata.orderId,
                    receiptUrl: chargeSucceeded.receipt_url
                };
                await this.paidOrder(payload);
            default:
                console.log(`Event ${event.type} not handled`);
        }
        return {
            message: 'success',
            signature
        };
    }
    async paidOrder({ orderId, receiptUrl, stripeChargeId }) {
        await this.prismaService.order.update({
            where: { id: orderId },
            data: {
                status: 'PAID',
                paid: true,
                paidAt: new Date(),
                stripeChargeId: stripeChargeId,
                receiptUrl
            }
        });
        return { msg: 'Paid Success' };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map