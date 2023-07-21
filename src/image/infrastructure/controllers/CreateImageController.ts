import { Request, Response } from "express";
import { CreateImageUseCase } from "../../application/CreateImageUseCase";
import { Image } from "../../domain/Image";

export class CreateImageController {
  constructor(private readonly createImageUseCase: CreateImageUseCase) {}

  async run(req: Request, res: Response) {
    const Image = req.body;
    try {
      const image = await this.createImageUseCase.run(
        Image.url,
        Image.idUser
      );

      if (image)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Image: {
            idImage: image?.idImage,
            url: image?.url,
            idUser: image?.idUser
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
