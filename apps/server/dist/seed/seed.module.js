"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const seed_service_1 = require("./seed.service");
const seed_controller_1 = require("./seed.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const hall_module_1 = require("../hall/hall.module");
const seat_module_1 = require("../seat/seat.module");
const movies_module_1 = require("../movies/movies.module");
const screening_module_1 = require("../screening/screening.module");
const booking_module_1 = require("../booking/booking.module");
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        controllers: [seed_controller_1.SeedController],
        providers: [seed_service_1.SeedService],
        imports: [
            prisma_module_1.PrismaModule,
            hall_module_1.HallModule,
            seat_module_1.SeatModule,
            movies_module_1.MoviesModule,
            screening_module_1.ScreeningModule,
            booking_module_1.BookingModule
        ]
    })
], SeedModule);
//# sourceMappingURL=seed.module.js.map