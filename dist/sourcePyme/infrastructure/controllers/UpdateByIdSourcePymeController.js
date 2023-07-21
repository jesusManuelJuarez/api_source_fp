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
exports.UpdateByIdSourcePymeController = void 0;
class UpdateByIdSourcePymeController {
    constructor(updateByIdSourcePymeUseCase) {
        this.updateByIdSourcePymeUseCase = updateByIdSourcePymeUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.idSourcePyme);
            const newSourcePyme = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud
            try {
                const updatedSourcePyme = yield this.updateByIdSourcePymeUseCase.run(id, newSourcePyme);
                if (updatedSourcePyme) {
                    // Código HTTP: 200 -> Actualización exitosa
                    res.status(200).send({
                        status: "success",
                        info: {
                            idSourcePyme: updatedSourcePyme.idSourcePyme,
                            imageProfile: updatedSourcePyme.imageProfile,
                            imageBanner: updatedSourcePyme.imageBanner,
                            idUser: updatedSourcePyme.idUser
                        },
                    });
                }
                else {
                    // Código HTTP: 400 -> Error de actualización
                    res.status(400).send({
                        status: "error",
                        msn: "No se pudo actualizar el dato",
                    });
                }
            }
            catch (error) {
                // Código HTTP: 500 -> Error interno del servidor
                res.status(500).send({
                    status: "error",
                    info: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.UpdateByIdSourcePymeController = UpdateByIdSourcePymeController;
