import { SourcePyme } from "../domain/SourcePyme";
import { SourcePymeRepository } from "../domain/SourcePymeRepository";

export class GetAllSourcePymeUseCase {
  constructor(readonly sourcePymeRepository: SourcePymeRepository) {}

  async run(): Promise<SourcePyme[] | null> {
    try {
      const result = await this.sourcePymeRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}