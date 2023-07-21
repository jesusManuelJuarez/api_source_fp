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
exports.GetAllSourceUserController = void 0;
class GetAllSourceUserController {
    constructor(getAllSourceUserUseCase) {
        this.getAllSourceUserUseCase = getAllSourceUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sourceUser = yield this.getAllSourceUserUseCase.run();
                console.log(sourceUser);
                if (sourceUser)
                    //Code HTTP : 200 -> Consulta exitosa
                    res.status(200).send({
                        status: "success",
                        info: sourceUser.map((sourceUser) => {
                            return {
                                idSourceUser: sourceUser.idSourceUser,
                                imageProfile: sourceUser.imageProfile,
                                idUser: sourceUser.idUser
                            };
                        }),
                    });
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrio algún problema",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    info: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.GetAllSourceUserController = GetAllSourceUserController;
