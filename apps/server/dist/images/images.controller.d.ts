import { ImagesService } from "./images.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
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
