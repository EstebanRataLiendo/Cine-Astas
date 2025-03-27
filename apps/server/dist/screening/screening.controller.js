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
exports.ScreeningController = void 0;
const common_1 = require("@nestjs/common");
const screening_service_1 = require("./screening.service");
const create_screening_dto_1 = require("./dto/create-screening.dto");
const update_screening_dto_1 = require("./dto/update-screening.dto");
const swagger_1 = require("@nestjs/swagger");
let ScreeningController = class ScreeningController {
    constructor(screeningService) {
        this.screeningService = screeningService;
    }
    create(createScreeningDto) {
        return this.screeningService.create(createScreeningDto);
    }
    findAll() {
        return this.screeningService.findAll();
    }
    findOne(id) {
        return this.screeningService.findOne(id);
    }
    update(id, updateScreeningDto) {
        return this.screeningService.update(id, updateScreeningDto);
    }
    remove(id) {
        return this.screeningService.remove(id);
    }
};
exports.ScreeningController = ScreeningController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new screening" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_screening_dto_1.CreateScreeningDto]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all screenings" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get a screening by ID" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a screening" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_screening_dto_1.UpdateScreeningDto]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a screening" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "remove", null);
exports.ScreeningController = ScreeningController = __decorate([
    (0, swagger_1.ApiTags)("Screening"),
    (0, common_1.Controller)("screening"),
    __metadata("design:paramtypes", [screening_service_1.ScreeningService])
], ScreeningController);
//# sourceMappingURL=screening.controller.js.map