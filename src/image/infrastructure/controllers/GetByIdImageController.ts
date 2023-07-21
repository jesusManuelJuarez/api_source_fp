import { Request, Response } from "express";
import { GetByIdImageUseCase } from "../../application/GetByIdImageUseCase";

export class GetByIdImageController {
  constructor(readonly getByIdImageUseCase: GetByIdImageUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idImage);
    try {
      const image = await this.getByIdImageUseCase.run(id);

      if (image)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idImage: image.idImage,
              url: image.url,
              idUser: image.idUser
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
