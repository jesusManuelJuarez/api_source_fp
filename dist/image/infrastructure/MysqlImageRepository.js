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
exports.MysqlImageRepository = void 0;
const Image_1 = require("../domain/Image");
const mysql_1 = require("../../database/mysql");
class MysqlImageRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM image";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoImage = Object.values(JSON.parse(JSON.stringify(info)));
                return infoImage.map((image) => new Image_1.Image(image.idImage, image.url, image.idUser));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM image WHERE idImage=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Image_1.Image(result[0].idImage, result[0].url, result[0].idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    createImage(url, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO image (url, idUser) VALUES (?, ?)";
            const params = [url, idUser];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Image_1.Image(result.insertId, url, idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newImage) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE image SET url = ?, idUser = ? WHERE idImage = ?";
            const params = [
                newImage.url || '',
                newImage.idUser || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedImage = new Image_1.Image(id, newImage.url || '', newImage.idUser || 0);
                return updatedImage;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM image WHERE idImage = ?";
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
exports.MysqlImageRepository = MysqlImageRepository;
