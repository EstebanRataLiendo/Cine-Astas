import { PrismaService } from "../prisma/prisma.service";
import { CreateScreeningDto } from "./dto/create-screening.dto";
import { UpdateScreeningDto } from "./dto/update-screening.dto";
export declare class ScreeningService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateScreeningDto): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
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
    update(id: string, data: UpdateScreeningDto): import(".prisma/client").Prisma.Prisma__ScreeningClient<{
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
    validateIds(ids: string[]): Promise<({
        movie: {
            description: string | null;
            format: string[];
            title: string;
            id: string;
            year: number;
            genre: string;
            language: string;
            duration: number;
            imageUrl: string | null;
            trailerUrl: string | null;
            classification: string;
            releaseDate: Date;
        };
    } & {
        id: string;
        hallId: string;
        movieId: string;
        schedule: Date;
        price: number;
    })[]>;
}
