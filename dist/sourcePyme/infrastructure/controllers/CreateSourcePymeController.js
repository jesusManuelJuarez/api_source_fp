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
exports.CreateSourcePymeController = void 0;
class CreateSourcePymeController {
    constructor(createSourcePymeUseCase) {
        this.createSourcePymeUseCase = createSourcePymeUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const SourcePyme = req.body;
            try {
                const sourcePyme = yield this.createSourcePymeUseCase.run(SourcePyme.imageProfile, SourcePyme.imageBanner, SourcePyme.idUser);
                if (sourcePyme)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        SourcePyme: {
                            idSourcePyme: sourcePyme === null || sourcePyme === void 0 ? void 0 : sourcePyme.idSourcePyme,
                            imageProfile: sourcePyme === null || sourcePyme === void 0 ? void 0 : sourcePyme.imageProfile,
                            imageBanner: sourcePyme === null || sourcePyme === void 0 ? void 0 : sourcePyme.imageBanner,
                            idUser: sourcePyme === null || sourcePyme === void 0 ? void 0 : sourcePyme.idUser
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        Data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    Data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateSourcePymeController = CreateSourcePymeController;
