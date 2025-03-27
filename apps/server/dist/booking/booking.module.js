"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModule = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const booking_controller_1 = require("./booking.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_module_1 = require("../notifications/notifications.module");
const seat_module_1 = require("../seat/seat.module");
let BookingModule = class BookingModule {
};
exports.BookingModule = BookingModule;
exports.BookingModule = BookingModule = __decorate([
    (0, common_1.Module)({
        imports: [notifications_module_1.NotificationsModule, seat_module_1.SeatModule],
        controllers: [booking_controller_1.BookingController],
        providers: [booking_service_1.BookingService, prisma_service_1.PrismaService],
        exports: [booking_service_1.BookingService]
    })
], BookingModule);
//# sourceMappingURL=booking.module.js.map