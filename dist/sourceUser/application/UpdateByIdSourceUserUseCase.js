"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateByIdSourceUserUseCase = void 0;
class UpdateByIdSourceUserUseCase {
    constructor(sourceUserRepository) {
        this.sourceUserRepository = sourceUserRepository;
    }
    run(id, newSourceUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingSourceUser = yield this.sourceUserRepository.getById(id);
                if (!existingSourceUser) {
                    return null;
                }
                // Realizar la actualización
                const updatedSourceUser = Object.assign(Object.assign({}, existingSourceUser), newSourceUser);
                const result = yield this.sourceUserRepository.updateById(id, updatedSourceUser);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdSourceUserUseCase = UpdateByIdSourceUserUseCase;
