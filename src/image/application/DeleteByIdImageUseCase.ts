import { ImageRepository } from "../domain/ImageRepository";

export class DeleteByIdImageUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedImage = await this.imageRepository.deleteById(id);

      if (deletedImage) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
