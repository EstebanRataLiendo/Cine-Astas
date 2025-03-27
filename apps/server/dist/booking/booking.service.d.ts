import { PrismaService } from "../prisma/prisma.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { NotificationsService } from "../notifications/notifications.service";
export declare class BookingService {
    private readonly prisma;
    private readonly notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationsService);
    create(data: CreateBookingDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        screeningId: string;
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
    }>;
    findAll(): Promise<({
        bookedSeats: ({
            seat: {
                number: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                row: string;
                hallId: string;
                isActive: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            seatId: string;
            bookingId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        screeningId: string;
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
    })[]>;
    findOne(id: string): Promise<({
        bookedSeats: ({
            seat: {
                number: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                row: string;
                hallId: string;
                isActive: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            seatId: string;
            bookingId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        screeningId: string;
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
    }) | null>;
    update(id: string, data: UpdateBookingDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        screeningId: string;
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        screeningId: string;
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
    }>;
}
