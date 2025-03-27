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
exports.HallController = void 0;
const common_1 = require("@nestjs/common");
const hall_service_1 = require("./hall.service");
const update_hall_dto_1 = require("./dto/update-hall.dto");
const create_hall_dto_1 = require("./dto/create-hall.dto");
const swagger_1 = require("@nestjs/swagger");
let HallController = class HallController {
    constructor(hallService) {
        this.hallService = hallService;
    }
    create(createHallDto) {
        return this.hallService.create(createHallDto);
    }
    findAll() {
        return this.hallService.findAll();
    }
    findOne(id) {
        return this.hallService.findOne(id);
    }
    update(id, updateHallDto) {
        return this.hallService.update(id, updateHallDto);
    }
    remove(id) {
        return this.hallService.remove(id);
    }
};
exports.HallController = HallController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new hall" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hall_dto_1.CreateHallDto]),
    __metadata("design:returntype", void 0)
], HallController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all halls" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HallController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get a hall by ID" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HallController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a hall" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hall_dto_1.UpdateHallDto]),
    __metadata("design:returntype", void 0)
], HallController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a hall" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HallController.prototype, "remove", null);
exports.HallController = HallController = __decorate([
    (0, swagger_1.ApiTags)("Hall"),
    (0, common_1.Controller)("hall"),
    __metadata("design:paramtypes", [hall_service_1.HallService])
], HallController);
//# sourceMappingURL=hall.controller.js.map