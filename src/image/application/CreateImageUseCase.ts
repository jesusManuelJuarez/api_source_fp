import { Image } from "../domain/Image";
import { ImageRepository } from "../domain/ImageRepository";

export class CreateImageUseCase {
  constructor(readonly imageRepository: ImageRepository) {}

  async run(
    url: string,
    idUser : number
  ): Promise<Image | null> {
    try {
      const image = await this.imageRepository.createImage(
        url,
        idUser
      );
      return image;
    } catch (error) {
      return null;
    }
  }
}
