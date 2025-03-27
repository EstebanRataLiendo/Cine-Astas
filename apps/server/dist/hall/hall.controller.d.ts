import { HallService } from "./hall.service";
import { UpdateHallDto } from "./dto/update-hall.dto";
import { CreateHallDto } from "./dto/create-hall.dto";
export declare class HallController {
    private readonly hallService;
    constructor(hallService: HallService);
    create(createHallDto: CreateHallDto): import(".prisma/client").Prisma.Prisma__HallClient<{
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
    update(id: string, updateHallDto: UpdateHallDto): import(".prisma/client").Prisma.Prisma__HallClient<{
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
