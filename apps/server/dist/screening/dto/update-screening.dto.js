"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScreeningDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_screening_dto_1 = require("./create-screening.dto");
class UpdateScreeningDto extends (0, mapped_types_1.PartialType)(create_screening_dto_1.CreateScreeningDto) {
}
exports.UpdateScreeningDto = UpdateScreeningDto;
//# sourceMappingURL=update-screening.dto.js.map