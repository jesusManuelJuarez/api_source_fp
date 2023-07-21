import { SourceUser } from "../domain/SourceUser";
import { SourceUserRepository } from "../domain/SourceUserRepository";

export class GetByIdSourceUserUseCase {
  constructor(readonly sourceUserRepository: SourceUserRepository) {}

  async run(id: number): Promise<SourceUser | null> {
    try {
      const result = await this.sourceUserRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
