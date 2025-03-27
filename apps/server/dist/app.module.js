"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const images_module_1 = require("./images/images.module");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const movies_module_1 = require("./movies/movies.module");
const booking_module_1 = require("./booking/booking.module");
const hall_module_1 = require("./hall/hall.module");
const screening_module_1 = require("./screening/screening.module");
const payments_module_1 = require("./payments/payments.module");
const orders_module_1 = require("./orders/orders.module");
const config_1 = require("@nestjs/config");
const notifications_module_1 = require("./notifications/notifications.module");
const seat_module_1 = require("./seat/seat.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            cloudinary_module_1.CloudinaryModule,
            images_module_1.ImagesModule,
            prisma_module_1.PrismaModule,
            movies_module_1.MoviesModule,
            booking_module_1.BookingModule,
            auth_module_1.AuthModule,
            hall_module_1.HallModule,
            screening_module_1.ScreeningModule,
            payments_module_1.PaymentsModule,
            orders_module_1.OrdersModule,
            notifications_module_1.NotificationsModule,
            seat_module_1.SeatModule,
            ...(process.env.NODE_ENV !== 'production' ? [seed_module_1.SeedModule] : []),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map