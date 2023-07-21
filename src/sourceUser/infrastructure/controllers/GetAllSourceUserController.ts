import { Request, Response } from "express";
import { GetAllSourceUserUseCase } from "../../application/GetAllSourceUserUseCase";

export class GetAllSourceUserController {
  constructor(readonly getAllSourceUserUseCase: GetAllSourceUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sourceUser = await this.getAllSourceUserUseCase.run();
      console.log(sourceUser);
      if (sourceUser)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: sourceUser.map((sourceUser: any) => {
            return {
              idSourceUser: sourceUser.idSourceUser,
              imageProfile: sourceUser.imageProfile,
              idUser: sourceUser.idUser
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
