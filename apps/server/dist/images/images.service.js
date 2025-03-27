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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ImagesService = class ImagesService {
    constructor(prisma, cloudinary) {
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    async create(file, createImageDto) {
        const result = await this.cloudinary.uploadImage(file);
        return this.prisma.image.create({
            data: {
                url: result.secure_url,
                publicId: result.public_id,
                description: createImageDto.description,
            },
            include: {
                comments: true,
            },
        });
    }
    async findAll() {
        return this.prisma.image.findMany({
            include: {
                comments: true,
            },
        });
    }
    async findOne(id) {
        const image = await this.prisma.image.findUnique({
            where: { id },
            include: {
                comments: true,
            },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Image with ID ${id} not found`);
        }
        return image;
    }
    async addComment(id, createCommentDto) {
        return this.prisma.comment.create({
            data: {
                content: createCommentDto.content,
                imageId: id,
            },
        });
    }
    async remove(id) {
        const image = await this.prisma.image.findUnique({
            where: { id },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Image with ID ${id} not found`);
        }
        await this.cloudinary.deleteImage(image.publicId);
        return this.prisma.image.delete({
            where: { id },
        });
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], ImagesService);
//# sourceMappingURL=images.service.js.map