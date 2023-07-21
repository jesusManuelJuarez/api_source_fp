import { Image } from "../domain/Image";
import { ImageRepository } from "../domain/ImageRepository";

export class UpdateByIdImageUseCase {
  constructor(readonly imageRepository: ImageRepository) {}

  async run(id: number, newImage: Partial<Image>): Promise<Image | null> {
    try {
      // Verificar si el dato existe
      const existingImage = await this.imageRepository.getById(id);
      if (!existingImage) {
        return null;
      }

      // Realizar la actualización
      const updatedImage = {
        ...existingImage,
        ...newImage,
      };

      const result = await this.imageRepository.updateById(id, updatedImage);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
