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
exports.MysqlSourceUserRepository = void 0;
const SourceUser_1 = require("../domain/SourceUser");
const mysql_1 = require("../../database/mysql");
class MysqlSourceUserRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM sourceUser";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoSourceUser = Object.values(JSON.parse(JSON.stringify(info)));
                return infoSourceUser.map((sourceUser) => new SourceUser_1.SourceUser(sourceUser.idSourceUser, sourceUser.imageProfile, sourceUser.idUser));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM sourceUser WHERE idSourceUser=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new SourceUser_1.SourceUser(result[0].idSourceUser, result[0].imageProfile, result[0].idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    createSourceUser(imageProfile, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO sourceUser (imageProfile,idUser) VALUES (?, ?)";
            const params = [imageProfile, idUser];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new SourceUser_1.SourceUser(result.insertId, imageProfile, idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newSourceUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE sourceUser SET imageProfile = ?, idUser = ? WHERE idSourceUser = ?";
            const params = [
                newSourceUser.imageProfile || '',
                newSourceUser.idUser || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedSourceUser = new SourceUser_1.SourceUser(id, newSourceUser.imageProfile || '', newSourceUser.idUser || 0);
                return updatedSourceUser;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM sourceUser WHERE idSourceUser = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                return false; // Error en la eliminación
            }
        });
    }
}
exports.MysqlSourceUserRepository = MysqlSourceUserRepository;
