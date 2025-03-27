import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    private client;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(email: string, password: string, name: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        password: string | null;
        role: import(".prisma/client").$Enums.Role;
        googleAuthToken: string | null;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        access_token: string;
    }>;
    validateOAuthLogin(user: any): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        access_token: string;
    }>;
    googleLogin(token: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        access_token: string;
    }>;
    handleGoogleCallback(req: any): Promise<any>;
}
