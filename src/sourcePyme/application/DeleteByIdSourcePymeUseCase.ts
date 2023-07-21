import { SourcePymeRepository } from "../domain/SourcePymeRepository";

export class DeleteByIdSourcePymeUseCase {
  constructor(private readonly sourcePymeRepository: SourcePymeRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedSourcePyme = await this.sourcePymeRepository.deleteById(id);

      if (deletedSourcePyme) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
