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
exports.MysqlSourcePymeRepository = void 0;
const SourcePyme_1 = require("../domain/SourcePyme");
const mysql_1 = require("../../database/mysql");
class MysqlSourcePymeRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM sourcePyme";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoSourcePyme = Object.values(JSON.parse(JSON.stringify(info)));
                return infoSourcePyme.map((sourcePyme) => new SourcePyme_1.SourcePyme(sourcePyme.idSourcePyme, sourcePyme.imageProfile, sourcePyme.imageBanner, sourcePyme.idUser));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM sourcePyme WHERE idSourcePyme=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new SourcePyme_1.SourcePyme(result[0].idSourcePyme, result[0].imageProfile, result[0].imageBanner, result[0].idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    createSourcePyme(imageProfile, imageBanner, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO sourcePyme (imageProfile, imageBanner, idUser) VALUES (?, ?, ?)";
            const params = [imageProfile, imageBanner, idUser];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new SourcePyme_1.SourcePyme(result.insertId, imageProfile, imageBanner, idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newSourcePyme) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE sourcePyme SET imageProfile = ?, imageBanner = ?,  idUser = ? WHERE idSourcePyme = ?";
            const params = [
                newSourcePyme.imageProfile || '',
                newSourcePyme.imageBanner || '',
                newSourcePyme.idUser || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedSourcePyme = new SourcePyme_1.SourcePyme(id, newSourcePyme.imageProfile || '', newSourcePyme.imageBanner || '', newSourcePyme.idUser || 0);
                return updatedSourcePyme;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM sourcePyme WHERE idSourcePyme = ?";
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
exports.MysqlSourcePymeRepository = MysqlSourcePymeRepository;
