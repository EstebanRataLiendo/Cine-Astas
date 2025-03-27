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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
let BookingService = class BookingService {
    constructor(prisma, notificationService) {
        this.prisma = prisma;
        this.notificationService = notificationService;
    }
    async create(data) {
        const { seatIds, ...bookingData } = data;
        const bookedSeats = await this.prisma.seatBooking.findMany({
            where: {
                seatId: { in: seatIds },
                booking: {
                    screeningId: data.screeningId,
                    status: { notIn: ["CANCELLED"] },
                },
            },
        });
        if (bookedSeats.length > 0) {
            throw new Error(`Some seats are already booked for this screening`);
        }
        const result = await this.prisma.$transaction(async (prisma) => {
            const booking = await prisma.booking.create({
                data: {
                    userId: data.userId,
                    screeningId: data.screeningId,
                    totalPrice: data.totalPrice,
                },
            });
            for (const seatId of seatIds) {
                await prisma.seatBooking.create({
                    data: {
                        bookingId: booking.id,
                        seatId,
                    },
                });
            }
            return booking;
        });
        await this.notificationService.sendNotification(data.userId, `Tu reserva para la función ${data.screeningId} está confirmada.`, "BOOKING_CONFIRMATION");
        return result;
    }
    async findAll() {
        return this.prisma.booking.findMany({
            include: {
                bookedSeats: {
                    include: {
                        seat: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.booking.findUnique({
            where: { id },
            include: {
                bookedSeats: {
                    include: {
                        seat: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return this.prisma.booking.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.booking.delete({ where: { id } });
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], BookingService);
//# sourceMappingURL=booking.service.js.map