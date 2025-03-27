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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const google_auth_library_1 = require("google-auth-library");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
    }
    async register(email, password, name) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: name || "User",
                role: client_1.Role.USER,
            },
        });
    }
    async login(email, password) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (user && (await bcrypt.compare(password, user.password || ""))) {
            return {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
                access_token: this.jwtService.sign({ email, sub: user.id }),
            };
        }
        throw new Error("Invalid credentials");
    }
    async validateOAuthLogin(user) {
        let userInDb = await this.prisma.user.findUnique({
            where: { email: user.email },
        });
        if (!userInDb) {
            userInDb = await this.prisma.user.create({
                data: {
                    email: user.email,
                    name: user.firstName || "User",
                    role: client_1.Role.USER,
                },
            });
        }
        const payload = { email: user.email, sub: userInDb.id };
        return {
            user: {
                id: userInDb.id,
                email: userInDb.email,
                name: userInDb.name,
                role: userInDb.role,
            },
            access_token: this.jwtService.sign(payload),
        };
    }
    async googleLogin(token) {
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (!payload || !payload.email) {
                throw new Error("Invalid Google token");
            }
            const email = payload.email;
            const name = payload.name || "Google User";
            let user = await this.prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                user = await this.prisma.user.create({
                    data: {
                        email: email,
                        name: name,
                        role: client_1.Role.USER,
                    },
                });
            }
            const jwtToken = this.jwtService.sign({
                email: user.email,
                sub: user.id,
            });
            return {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
                access_token: jwtToken,
            };
        }
        catch (error) {
            console.error("Google authentication error:", error);
            throw new Error("Failed to authenticate with Google");
        }
    }
    async handleGoogleCallback(req) {
        if (!req.user) {
            throw new Error("No user from Google");
        }
        return req.user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map