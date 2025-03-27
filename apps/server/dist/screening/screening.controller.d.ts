import { ScreeningService } from "./screening.service";
import { CreateScreeningDto } from "./dto/create-screening.dto";
import { UpdateScreeningDto } from "./dto/update-screening.dto";
export declare class ScreeningController {
    private readonly screeningService;
    constructor(screeningService: ScreeningService);
    create(createScreeningDto: CreateScreeningDto): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateScreeningDto: UpdateScreeningDto): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
