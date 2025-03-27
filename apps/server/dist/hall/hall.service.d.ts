import { PrismaService } from "../prisma/prisma.service";
import { UpdateHallDto } from "./dto/update-hall.dto";
import { CreateHallDto } from "./dto/create-hall.dto";
export declare class HallService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateHallDto): import(".prisma/client").Prisma.Prisma__HallClient<{
        id: string;
        name: string;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        capacity: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HallClient<{
        id: string;
        name: string;
        capacity: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: UpdateHallDto): import(".prisma/client").Prisma.Prisma__HallClient<{
        id: string;
        name: string;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HallClient<{
        id: string;
        name: string;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
