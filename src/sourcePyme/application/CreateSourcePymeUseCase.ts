import { SourcePyme } from "../domain/SourcePyme";
import { SourcePymeRepository } from "../domain/SourcePymeRepository";

export class CreateSourcePymeUseCase {
  constructor(readonly sourcePymeRepository: SourcePymeRepository) {}

  async run(
     imageProfile: string,
     imageBanner: string,
     idUser : number
  ): Promise<SourcePyme | null> {
    try {
      const sourcePyme = await this.sourcePymeRepository.createSourcePyme(
        imageProfile,
        imageBanner,
        idUser
      );
      return sourcePyme;
    } catch (error) {
      return null;
    }
  }
}
