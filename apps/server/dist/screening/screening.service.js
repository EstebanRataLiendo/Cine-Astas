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
exports.ScreeningService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ScreeningService = class ScreeningService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.screening.create({ data });
    }
    findAll() {
        return this.prisma.screening.findMany();
    }
    findOne(id) {
        return this.prisma.screening.findUnique({ where: { id } });
    }
    update(id, data) {
        return this.prisma.screening.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.screening.delete({ where: { id } });
    }
    async validateIds(ids) {
        ids = Array.from(new Set(ids));
        const movies = await this.prisma.screening.findMany({
            where: {
                id: {
                    in: ids
                },
            },
            include: {
                movie: true
            }
        });
        if (movies.length !== ids.length)
            throw new common_1.NotFoundException('Some movies not found');
        return movies;
    }
};
exports.ScreeningService = ScreeningService;
exports.ScreeningService = ScreeningService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ScreeningService);
//# sourceMappingURL=screening.service.js.map