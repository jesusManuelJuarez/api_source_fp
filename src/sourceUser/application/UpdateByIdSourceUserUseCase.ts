import { SourceUser } from "../domain/SourceUser";
import { SourceUserRepository } from "../domain/SourceUserRepository";

export class UpdateByIdSourceUserUseCase {
  constructor(readonly sourceUserRepository: SourceUserRepository) {}

  async run(id: number, newSourceUser: Partial<SourceUser>): Promise<SourceUser | null> {
    try {
      // Verificar si el dato existe
      const existingSourceUser = await this.sourceUserRepository.getById(id);
      if (!existingSourceUser) {
        return null;
      }

      // Realizar la actualización
      const updatedSourceUser = {
        ...existingSourceUser,
        ...newSourceUser,
      };

      const result = await this.sourceUserRepository.updateById(id, updatedSourceUser);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
