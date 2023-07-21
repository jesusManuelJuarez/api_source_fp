import { SourcePyme } from "../domain/SourcePyme";
import { SourcePymeRepository } from "../domain/SourcePymeRepository";

export class GetByIdSourcePymeUseCase {
  constructor(readonly sourcePymeRepository: SourcePymeRepository) {}

  async run(id: number): Promise<SourcePyme | null> {
    try {
      const result = await this.sourcePymeRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
