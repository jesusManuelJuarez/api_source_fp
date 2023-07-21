import { SourcePyme } from "../domain/SourcePyme";
import { SourcePymeRepository } from "../domain/SourcePymeRepository";
import { query } from "../../database/mysql";

export class MysqlSourcePymeRepository implements SourcePymeRepository {

  async getAll(): Promise<SourcePyme[] | null> {
    const sql = "SELECT * FROM sourcePyme";
    try {
      const [info]: any = await query(sql, []);
      const infoSourcePyme = Object.values(JSON.parse(JSON.stringify(info)));

      return infoSourcePyme.map(
        (sourcePyme: any) =>
          new SourcePyme(
            sourcePyme.idSourcePyme,
            sourcePyme.imageProfile,
            sourcePyme.imageBanner,
            sourcePyme.idUser
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<SourcePyme | null> {
    const sql = "SELECT * FROM sourcePyme WHERE idSourcePyme=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new SourcePyme(
        result[0].idSourcePyme,
        result[0].imageProfile,
        result[0].imageBanner,
        result[0].idUser
      );
    } catch (error) {
      return null;
    }
  }

  async createSourcePyme(
    imageProfile: string,
    imageBanner: string,
    idUser: number
  ): Promise<SourcePyme | null> {
    const sql =
      "INSERT INTO sourcePyme (imageProfile, imageBanner, idUser) VALUES (?, ?, ?)";
    const params: any[] = [imageProfile, imageBanner, idUser];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new SourcePyme(result.insertId, imageProfile, imageBanner, idUser);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newSourcePyme: Partial<SourcePyme>): Promise<SourcePyme | null> {
    const sql =
      "UPDATE sourcePyme SET imageProfile = ?, imageBanner = ?,  idUser = ? WHERE idSourcePyme = ?";
    const params: any[] = [
      newSourcePyme.imageProfile || '', // Si newData.name es undefined, se asigna una cadena vacía
      newSourcePyme.imageBanner || '', // Si newData.description es undefined, se asigna una cadena vacía // Si newData.website es undefined, se asigna una cadena vacía
      newSourcePyme.idUser || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedSourcePyme = new SourcePyme(
        id,
        newSourcePyme.imageProfile || '',
        newSourcePyme.imageBanner || '',
        newSourcePyme.idUser || 0
      );
      return updatedSourcePyme;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM sourcePyme WHERE idSourcePyme = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
