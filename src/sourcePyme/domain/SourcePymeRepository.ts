import { SourcePyme } from "./SourcePyme";

export interface SourcePymeRepository {
  getAll(): Promise<SourcePyme[] | null>;

  getById(id: number): Promise<SourcePyme | null>;

  updateById(id: number, sourcePyme: SourcePyme): Promise<SourcePyme | null>;
  deleteById(id: number): Promise<boolean>;

  createSourcePyme(
    imagePyme: string,
    imageBanner: string,
    idUser : number
  ): Promise<SourcePyme | null>;
}
