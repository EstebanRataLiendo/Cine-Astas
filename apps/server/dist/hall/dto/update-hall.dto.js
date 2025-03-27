"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHallDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hall_dto_1 = require("./create-hall.dto");
class UpdateHallDto extends (0, mapped_types_1.PartialType)(create_hall_dto_1.CreateHallDto) {
}
exports.UpdateHallDto = UpdateHallDto;
//# sourceMappingURL=update-hall.dto.js.map