import { SourceUserRepository } from "../domain/SourceUserRepository";

export class DeleteByIdSourceUserUseCase {
  constructor(private readonly sourceUserRepository: SourceUserRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedSourceUser = await this.sourceUserRepository.deleteById(id);

      if (deletedSourceUser) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
