import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }>;
    createBulk(createSeatDtos: CreateSeatDto[]): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }[]>;
    generateHallSeats(hallId: string): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }[]>;
    findByHall(hallId: string): import(".prisma/client").Prisma.PrismaPromise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }[]>;
    findAvailableSeats(screeningId: string): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SeatClient<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateSeatDto: UpdateSeatDto): import(".prisma/client").Prisma.Prisma__SeatClient<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SeatClient<{
        number: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        row: string;
        hallId: string;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
