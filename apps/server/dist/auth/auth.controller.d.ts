import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        password: string | null;
        role: import(".prisma/client").$Enums.Role;
        googleAuthToken: string | null;
    }>;
    login(body: LoginDto): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        access_token: string;
    }>;
    googleLogin(token: string): Promise<{
        message: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        access_token: string;
    }>;
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: any, res: Response): Promise<void | Response<any, Record<string, any>>>;
}
