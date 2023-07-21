import { Request, Response } from "express";
import { GetAllSourcePymeUseCase } from "../../application/GetAllSourcePymeUseCase";

export class GetAllSourcePymeController {
  constructor(readonly getAllSourcePymeUseCase: GetAllSourcePymeUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sourcePymes = await this.getAllSourcePymeUseCase.run();
      console.log(sourcePymes);
      if (sourcePymes)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: sourcePymes.map((sourcePyme: any) => {
            return {
              idSourcePyme: sourcePyme.idSourcePyme,
              imageProfile: sourcePyme.imageProfile,
              imageBanner: sourcePyme.imageBanner,
              idUser: sourcePyme.idUser
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        info: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
