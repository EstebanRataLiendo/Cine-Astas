import { UploadApiResponse } from "cloudinary";
export declare class CloudinaryService {
    constructor();
    uploadImage(file: Express.Multer.File): Promise<UploadApiResponse>;
    deleteImage(publicId: string): Promise<any>;
    uploadVideo(file: Express.Multer.File, options?: any): Promise<UploadApiResponse>;
    deleteVideo(publicId: any): Promise<unknown>;
}
