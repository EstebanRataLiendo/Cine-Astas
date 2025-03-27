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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MoviesService = class MoviesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.movie.create({
            data: { ...dto,
                releaseDate: new Date(dto.releaseDate)
            },
        });
    }
    async findAll() {
        return this.prisma.movie.findMany();
    }
    async findOne(id) {
        return this.prisma.movie.findUnique({
            where: { id }
        });
    }
    async update(id, dto) {
        return this.prisma.movie.update({
            where: { id },
            data: { ...dto },
        });
    }
    remove(id) {
        return this.prisma.movie.delete({ where: { id } });
    }
    async validateIds(ids) {
        ids = Array.from(new Set(ids));
        const movies = await this.prisma.movie.findMany({
            where: {
                id: {
                    in: ids
                },
            },
        });
        if (movies.length !== ids.length)
            throw new common_1.NotFoundException('Some movies not found');
        return movies;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MoviesService);
//# sourceMappingURL=movies.service.js.map