import { SourceUser } from "../domain/SourceUser";
import { SourceUserRepository } from "../domain/SourceUserRepository";

export class CreateSourceUserUseCase {
  constructor(readonly sourceUserRepository: SourceUserRepository) {}

  async run(
    imageProfile: string,
    idUser : number
  ): Promise<SourceUser | null> {
    try {
      const sourceUser = await this.sourceUserRepository.createSourceUser(
        imageProfile,
        idUser
      );
      return sourceUser;
    } catch (error) {
      return null;
    }
  }
}
