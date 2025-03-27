import { PrismaService } from "../prisma/prisma.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class ImagesService {
    private prisma;
    private cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    create(file: Express.Multer.File, createImageDto: CreateImageDto): Promise<{
        comments: {
            content: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            imageId: string;
        }[];
    } & {
        description: string | null;
        id: string;
        url: string;
        publicId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        comments: {
            content: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            imageId: string;
        }[];
    } & {
        description: string | null;
        id: string;
        url: string;
        publicId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        comments: {
            content: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            imageId: string;
        }[];
    } & {
        description: string | null;
        id: string;
        url: string;
        publicId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addComment(id: string, createCommentDto: CreateCommentDto): Promise<{
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageId: string;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        id: string;
        url: string;
        publicId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
