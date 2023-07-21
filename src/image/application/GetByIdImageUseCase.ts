import { Image } from "../domain/Image";
import { ImageRepository } from "../domain/ImageRepository";

export class GetByIdImageUseCase {
  constructor(readonly imageRepository: ImageRepository) {}

  async run(id: number): Promise<Image | null> {
    try {
      const result = await this.imageRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
