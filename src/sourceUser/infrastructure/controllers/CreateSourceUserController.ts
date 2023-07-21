import { Request, Response } from "express";
import { CreateSourceUserUseCase } from "../../application/CreateSourceUserUseCase";
import { SourceUser } from "../../domain/SourceUser";

export class CreateSourceUserController {
  constructor(private readonly createSourceUserUseCase: CreateSourceUserUseCase) {}

  async run(req: Request, res: Response) {
    const SourceUser = req.body;
    try {
      const sourceUser = await this.createSourceUserUseCase.run(
        SourceUser.imageProfile,
        SourceUser.idUser
      );

      if (sourceUser)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Data: {
            idSourceUser: sourceUser?.idSourceUser,
            imageProfile: sourceUser?.imageProfile,
            idUser: sourceUser?.idUser
          },
        });
      else
        res.status(204).send({
          status: "error",
          Data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        Data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
