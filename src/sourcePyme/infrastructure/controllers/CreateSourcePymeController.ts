import { Request, Response } from "express";
import { CreateSourcePymeUseCase } from "../../application/CreateSourcePymeUseCase";
import { SourcePyme } from "../../domain/SourcePyme";

export class CreateSourcePymeController {
  constructor(private readonly createSourcePymeUseCase: CreateSourcePymeUseCase) {}

  async run(req: Request, res: Response) {
    const SourcePyme = req.body;
    try {
      const sourcePyme = await this.createSourcePymeUseCase.run(
        SourcePyme.imageProfile,
        SourcePyme.imageBanner,
        SourcePyme.idUser
      );

      if (sourcePyme)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          SourcePyme: {
            idSourcePyme: sourcePyme?.idSourcePyme,
            imageProfile: sourcePyme?.imageProfile,
            imageBanner: sourcePyme?.imageBanner,
            idUser: sourcePyme?.idUser
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
