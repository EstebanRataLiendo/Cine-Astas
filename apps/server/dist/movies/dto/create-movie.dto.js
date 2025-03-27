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
exports.CreateMovieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateMovieDto {
}
exports.CreateMovieDto = CreateMovieDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Inception" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2010 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Sci-Fi" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "English" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 148 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "https://image.url" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "https://trailer.url" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "trailerUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "A mind-bending thriller" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PG-13" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "classification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["2D", "3D"] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-06-15" }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateMovieDto.prototype, "releaseDate", void 0);
//# sourceMappingURL=create-movie.dto.js.map