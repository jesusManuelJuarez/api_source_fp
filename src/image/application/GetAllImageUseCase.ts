import { Image } from "../domain/Image";
import { ImageRepository } from "../domain/ImageRepository";

export class GetAllImageUseCase {
  constructor(readonly imageRepository: ImageRepository) {}

  async run(): Promise<Image[] | null> {
    try {
      const result = await this.imageRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}