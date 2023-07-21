import { Request, Response } from "express";
import { GetAllImageUseCase } from "../../application/GetAllImageUseCase";

export class GetAllImageController {
  constructor(readonly getAllImageUseCase: GetAllImageUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const images = await this.getAllImageUseCase.run();
      console.log(images);
      if (images)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: images.map((image: any) => {
            return {
              idImage: image.idImage,
              url: image.url,
              idUser: image.idUser
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
