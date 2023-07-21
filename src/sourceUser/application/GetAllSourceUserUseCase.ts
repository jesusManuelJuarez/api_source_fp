import { SourceUser } from "../domain/SourceUser";
import { SourceUserRepository } from "../domain/SourceUserRepository";

export class GetAllSourceUserUseCase {
  constructor(readonly sourceUserRepository: SourceUserRepository) {}

  async run(): Promise<SourceUser[] | null> {
    try {
      const result = await this.sourceUserRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}