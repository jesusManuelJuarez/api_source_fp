import { SourcePyme } from "../domain/SourcePyme";
import { SourcePymeRepository } from "../domain/SourcePymeRepository";

export class UpdateByIdSourcePymeUseCase {
  constructor(readonly sourcePymeRepository: SourcePymeRepository) {}

  async run(id: number, newSourcePyme: Partial<SourcePyme>): Promise<SourcePyme | null> {
    try {
      // Verificar si el dato existe
      const existingSourcePyme = await this.sourcePymeRepository.getById(id);
      if (!existingSourcePyme) {
        return null;
      }

      // Realizar la actualización
      const updatedSourcePyme = {
        ...existingSourcePyme,
        ...newSourcePyme,
      };

      const result = await this.sourcePymeRepository.updateById(id, updatedSourcePyme);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
