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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const payments_service_1 = require("../payments/payments.service");
const screening_service_1 = require("../screening/screening.service");
let OrdersService = class OrdersService {
    constructor(screeningService, paymentService, prismaService) {
        this.screeningService = screeningService;
        this.paymentService = paymentService;
        this.prismaService = prismaService;
    }
    async create(createOrderDto) {
        const { items, buyerUserId } = createOrderDto;
        const screeningIds = items.map((item) => item.productId);
        const allSeatIds = items.flatMap((item) => item.seatIds);
        const screeningMovies = await this.screeningService
            .validateIds(screeningIds)
            .catch((err) => {
            throw err;
        });
        await this.validateSeatsAvailability(items);
        const totalAmount = screeningMovies.reduce((acc, screening) => {
            const orderItem = items.find((item) => item.productId === screening.id);
            if (!orderItem) {
                throw new Error(`Order item for screening ${screening.id} not found`);
            }
            const seatCount = orderItem.seatIds.length;
            const totalPrice = screening.price * seatCount;
            return acc + totalPrice;
        }, 0);
        const totalItems = items.reduce((acc, orderItem) => {
            return acc + orderItem.seatIds.length;
        }, 0);
        const order = await this.prismaService.$transaction(async (prisma) => {
            const newOrder = await prisma.order.create({
                data: {
                    totalAmount,
                    totalItems,
                    buyerUserId,
                    OrderItem: {
                        createMany: {
                            data: items.map(({ productId, seatIds }) => {
                                const screeningMovie = screeningMovies.find((s) => s.id === productId);
                                if (!screeningMovie) {
                                    throw new Error(`Screening with ID ${productId} not found`);
                                }
                                return {
                                    price: screeningMovie.price * seatIds.length,
                                    productId,
                                    quantity: seatIds.length,
                                };
                            }),
                        },
                    },
                },
                include: {
                    OrderItem: {
                        select: {
                            price: true,
                            quantity: true,
                            productId: true,
                        },
                    },
                },
            });
            for (const item of items) {
                const screening = screeningMovies.find((s) => s.id === item.productId);
                if (!screening) {
                    throw new Error(`Screening with ID ${item.productId} not found`);
                }
                const booking = await prisma.booking.create({
                    data: {
                        userId: buyerUserId,
                        screeningId: item.productId,
                        totalPrice: screening.price * item.seatIds.length,
                        status: "PENDING",
                    },
                });
                for (const seatId of item.seatIds) {
                    await prisma.seatBooking.create({
                        data: {
                            bookingId: booking.id,
                            seatId,
                        },
                    });
                }
            }
            return newOrder;
        });
        return {
            ...order,
            OrderItem: order.OrderItem.map((orderItem) => {
                const screeningMovie = screeningMovies.find((movie) => movie.id === orderItem.productId);
                return {
                    ...orderItem,
                    title: screeningMovie?.movie?.title || "Unknown Title",
                    imageUrl: screeningMovie?.movie?.imageUrl || "",
                };
            }),
            discounts: createOrderDto.discounts,
        };
    }
    async validateSeatsAvailability(items) {
        for (const item of items) {
            const { productId, seatIds } = item;
            const seats = await this.prismaService.seat.findMany({
                where: { id: { in: seatIds } },
            });
            if (seats.length !== seatIds.length) {
                throw new Error(`Some selected seats do not exist`);
            }
            const bookedSeats = await this.prismaService.seatBooking.findMany({
                where: {
                    seatId: { in: seatIds },
                    booking: {
                        screeningId: productId,
                        status: { notIn: ["CANCELLED"] },
                    },
                },
            });
            if (bookedSeats.length > 0) {
                throw new Error(`Some seats are already booked for this screening`);
            }
        }
    }
    async createPaymentSession(order) {
        const ids = order?.OrderItem.map((item) => item.productId);
        await this.screeningService.validateIds(ids).catch((err) => {
            throw err;
        });
        try {
            const paymentSession = this.paymentService.createPaymentSession({
                orderId: order.id,
                currency: "ars",
                items: order.OrderItem.map((item) => ({
                    imageUrl: item.imageUrl,
                    name: item.title,
                    price: item.price * 100,
                    quantity: item.quantity,
                })),
                discounts: order.discounts,
            });
            return paymentSession;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        const order = await this.prismaService.order.findUnique({
            where: { id },
            include: {
                OrderItem: true
            }
        });
        if (!order)
            throw new common_1.NotFoundException(`Order with id ${id} not found`);
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [screening_service_1.ScreeningService,
        payments_service_1.PaymentsService,
        prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map