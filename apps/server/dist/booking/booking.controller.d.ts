import { BookingService } from "./booking.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): Promise<{
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
    update(id: string, updateBookingDto: UpdateBookingDto): Promise<{
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
