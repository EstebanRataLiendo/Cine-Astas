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
exports.SeatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SeatService = class SeatService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const existingSeat = await this.prisma.seat.findFirst({
            where: {
                number: data.number,
                row: data.row,
                hallId: data.hallId,
            },
        });
        if (existingSeat) {
            throw new Error(`Seat ${data.row}${data.number} already exists in this hall`);
        }
        return this.prisma.seat.create({ data });
    }
    async createBulk(dataArray) {
        const createdSeats = [];
        for (const data of dataArray) {
            try {
                const seat = await this.create(data);
                createdSeats.push(seat);
            }
            catch (error) {
                console.error(`Error creating seat ${data.row}${data.number}: ${error.message}`);
            }
        }
        return createdSeats;
    }
    async generateHallSeats(hallId) {
        const hall = await this.prisma.hall.findUnique({
            where: { id: hallId },
        });
        if (!hall) {
            throw new common_1.NotFoundException(`Hall with ID ${hallId} not found`);
        }
        const rows = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
        ];
        const seatsPerRow = 10;
        const seats = [];
        for (const row of rows) {
            for (let number = 1; number <= seatsPerRow; number++) {
                try {
                    const seat = await this.prisma.seat.create({
                        data: {
                            row,
                            number,
                            hallId,
                            isActive: true,
                        },
                    });
                    seats.push(seat);
                }
                catch (error) {
                    console.error(`Error creating seat ${row}${number}: ${error.message}`);
                }
            }
        }
        return seats;
    }
    findAll() {
        return this.prisma.seat.findMany();
    }
    findByHall(hallId) {
        return this.prisma.seat.findMany({
            where: { hallId },
            orderBy: [{ row: "asc" }, { number: "asc" }],
        });
    }
    async findAvailableSeats(screeningId) {
        const screening = await this.prisma.screening.findUnique({
            where: { id: screeningId },
            select: { hallId: true },
        });
        if (!screening) {
            throw new common_1.NotFoundException(`Screening with ID ${screeningId} not found`);
        }
        const allSeats = await this.prisma.seat.findMany({
            where: {
                hallId: screening.hallId,
                isActive: true,
            },
            orderBy: [{ row: "asc" }, { number: "asc" }],
        });
        const bookedSeatIds = await this.prisma.seatBooking.findMany({
            where: {
                booking: {
                    screeningId,
                    status: { notIn: ["CANCELLED"] },
                },
            },
            select: { seatId: true },
        });
        const bookedSeatIdSet = new Set(bookedSeatIds.map((b) => b.seatId));
        const availableSeats = allSeats.filter((seat) => !bookedSeatIdSet.has(seat.id));
        return availableSeats;
    }
    findOne(id) {
        return this.prisma.seat.findUnique({ where: { id } });
    }
    update(id, data) {
        return this.prisma.seat.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.seat.delete({ where: { id } });
    }
};
exports.SeatService = SeatService;
exports.SeatService = SeatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeatService);
//# sourceMappingURL=seat.service.js.map