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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatController = void 0;
const common_1 = require("@nestjs/common");
const seat_service_1 = require("./seat.service");
const create_seat_dto_1 = require("./dto/create-seat.dto");
const update_seat_dto_1 = require("./dto/update-seat.dto");
const swagger_1 = require("@nestjs/swagger");
let SeatController = class SeatController {
    constructor(seatService) {
        this.seatService = seatService;
    }
    create(createSeatDto) {
        return this.seatService.create(createSeatDto);
    }
    createBulk(createSeatDtos) {
        return this.seatService.createBulk(createSeatDtos);
    }
    generateHallSeats(hallId) {
        return this.seatService.generateHallSeats(hallId);
    }
    findAll() {
        return this.seatService.findAll();
    }
    findByHall(hallId) {
        return this.seatService.findByHall(hallId);
    }
    findAvailableSeats(screeningId) {
        return this.seatService.findAvailableSeats(screeningId);
    }
    findOne(id) {
        return this.seatService.findOne(id);
    }
    update(id, updateSeatDto) {
        return this.seatService.update(id, updateSeatDto);
    }
    remove(id) {
        return this.seatService.remove(id);
    }
};
exports.SeatController = SeatController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new seat' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seat_dto_1.CreateSeatDto]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, swagger_1.ApiOperation)({ summary: 'Create multiple seats at once' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "createBulk", null);
__decorate([
    (0, common_1.Post)('generate/:hallId'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate all seats for a hall' }),
    __param(0, (0, common_1.Param)('hallId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "generateHallSeats", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all seats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('hall/:hallId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all seats for a specific hall' }),
    __param(0, (0, common_1.Param)('hallId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findByHall", null);
__decorate([
    (0, common_1.Get)('available/:screeningId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all available seats for a specific screening' }),
    __param(0, (0, common_1.Param)('screeningId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findAvailableSeats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a seat by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a seat' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seat_dto_1.UpdateSeatDto]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a seat' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "remove", null);
exports.SeatController = SeatController = __decorate([
    (0, swagger_1.ApiTags)('seats'),
    (0, common_1.Controller)('seats'),
    __metadata("design:paramtypes", [seat_service_1.SeatService])
], SeatController);
//# sourceMappingURL=seat.controller.js.map