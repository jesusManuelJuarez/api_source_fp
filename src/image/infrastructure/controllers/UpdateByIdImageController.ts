import { Request, Response } from "express";
import { UpdateByIdImageUseCase } from "../../application/UpdateByIdImageUseCase";

export class UpdateByIdImageController {
  constructor(readonly updateByIdImageUseCase: UpdateByIdImageUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idImage);
    const newImage = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedImage = await this.updateByIdImageUseCase.run(id, newImage);

      if (updatedImage) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idImage: updatedImage.idImage,
            url: updatedImage.url,
            idUser: updatedImage.idUser
          },
        });
      } else {
        // Código HTTP: 400 -> Error de actualización
        res.status(400).send({
          status: "error",
          msn: "No se pudo actualizar el dato",
        });
      }
    } catch (error) {
      // Código HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        info: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
