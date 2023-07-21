import { Request, Response } from "express";
import { GetByIdSourceUserUseCase } from "../../application/GetByIdSourceUserUseCase";

export class GetByIdSourceUserController {
  constructor(readonly getByIdSourceUserUseCase: GetByIdSourceUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idSourceUser);
    try {
      const sourceUser = await this.getByIdSourceUserUseCase.run(id);

      if (sourceUser)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idSourceUser: sourceUser.idSourceUser,
              imageProfile: sourceUser.imageProfile,
              idUser: sourceUser.idUser
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
