import { Request, Response } from "express";
import { GetByIdSourcePymeUseCase } from "../../application/GetByIdSourcePymeUseCase";

export class GetByIdSourcePymeController {
  constructor(readonly getByIdSourcePymeUseCase: GetByIdSourcePymeUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idSourcePyme);
    try {
      const sourcePyme = await this.getByIdSourcePymeUseCase.run(id);

      if (sourcePyme)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idSourcePyme: sourcePyme.idSourcePyme,
              imageProfile: sourcePyme.imageProfile,
              imageBanner: sourcePyme.imageBanner,
              idUser: sourcePyme.idUser
          },
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
