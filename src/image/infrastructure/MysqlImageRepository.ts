import { Image } from "../domain/Image";
import { ImageRepository } from "../domain/ImageRepository";
import { query } from "../../database/mysql";

export class MysqlImageRepository implements ImageRepository {

  async getAll(): Promise<Image[] | null> {
    const sql = "SELECT * FROM image";
    try {
      const [info]: any = await query(sql, []);
      const infoImage = Object.values(JSON.parse(JSON.stringify(info)));

      return infoImage.map(
        (image: any) =>
          new Image(
            image.idImage,
            image.url,
            image.idUser
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Image | null> {
    const sql = "SELECT * FROM image WHERE idImage=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Image(
        result[0].idImage,
        result[0].url,
        result[0].idUser
      );
    } catch (error) {
      return null;
    }
  }

  async createImage(
    url: string,
    idUser: number
  ): Promise<Image | null> {
    const sql =
      "INSERT INTO image (url, idUser) VALUES (?, ?)";
    const params: any[] = [url, idUser];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Image(result.insertId, url, idUser);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newImage: Partial<Image>): Promise<Image | null> {
    const sql =
      "UPDATE image SET url = ?, idUser = ? WHERE idImage = ?";
    const params: any[] = [
      newImage.url || '', // Si newData.name es undefined, se asigna una cadena vacía
      newImage.idUser || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedImage = new Image(
        id,
        newImage.url || '',
        newImage.idUser || 0
      );
      return updatedImage;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM image WHERE idImage = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
