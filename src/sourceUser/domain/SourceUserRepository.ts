import { SourceUser } from "./SourceUser";

export interface SourceUserRepository {
  getAll(): Promise<SourceUser[] | null>;

  getById(id: number): Promise<SourceUser | null>;

  updateById(id: number, sourceUser: SourceUser): Promise<SourceUser | null>;
  deleteById(id: number): Promise<boolean>;

  createSourceUser(
    imageProfile: string,
    idUser : number
  ): Promise<SourceUser | null>;
}
