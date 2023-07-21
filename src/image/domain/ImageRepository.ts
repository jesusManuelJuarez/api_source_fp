import { Image } from "./Image";

export interface ImageRepository {
  getAll(): Promise<Image[] | null>;

  getById(id: number): Promise<Image | null>;

  updateById(id: number, data: Image): Promise<Image | null>;
  deleteById(id: number): Promise<boolean>;

  createImage(
    url: string,
    idUser : number
  ): Promise<Image | null>;
}
