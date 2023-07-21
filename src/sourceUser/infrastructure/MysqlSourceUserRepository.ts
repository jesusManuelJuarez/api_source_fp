import { SourceUser } from "../domain/SourceUser";
import { SourceUserRepository } from "../domain/SourceUserRepository";
import { query } from "../../database/mysql";

export class MysqlSourceUserRepository implements SourceUserRepository {

  async getAll(): Promise<SourceUser[] | null> {
    const sql = "SELECT * FROM sourceUser";
    try {
      const [info]: any = await query(sql, []);
      const infoSourceUser = Object.values(JSON.parse(JSON.stringify(info)));

      return infoSourceUser.map(
        (sourceUser: any) =>
          new SourceUser(
            sourceUser.idSourceUser,
            sourceUser.imageProfile,
            sourceUser.idUser
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<SourceUser | null> {
    const sql = "SELECT * FROM sourceUser WHERE idSourceUser=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new SourceUser(
        result[0].idSourceUser,
        result[0].imageProfile,
        result[0].idUser
      );
    } catch (error) {
      return null;
    }
  }

  async createSourceUser(
    imageProfile: string,
    idUser: number
  ): Promise<SourceUser | null> {
    const sql =
      "INSERT INTO sourceUser (imageProfile,idUser) VALUES (?, ?)";
    const params: any[] = [imageProfile,idUser];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new SourceUser(result.insertId, imageProfile, idUser);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newSourceUser: Partial<SourceUser>): Promise<SourceUser | null> {
    const sql =
      "UPDATE sourceUser SET imageProfile = ?, idUser = ? WHERE idSourceUser = ?";
    const params: any[] = [
      newSourceUser.imageProfile || '', // Si newData.name es undefined, se asigna una cadena vacía/ Si newData.website es undefined, se asigna una cadena vacía
      newSourceUser.idUser || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedSourceUser = new SourceUser(
        id,
        newSourceUser.imageProfile || '',
        newSourceUser.idUser || 0
      );
      return updatedSourceUser;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM sourceUser WHERE idSourceUser = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
