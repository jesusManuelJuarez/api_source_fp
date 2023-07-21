import { Request, Response } from "express";
import { UpdateByIdSourcePymeUseCase } from "../../application/UpdateByIdSourcePymeUseCase";

export class UpdateByIdSourcePymeController {
  constructor(readonly updateByIdSourcePymeUseCase: UpdateByIdSourcePymeUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idSourcePyme);
    const newSourcePyme = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedSourcePyme = await this.updateByIdSourcePymeUseCase.run(id, newSourcePyme);

      if (updatedSourcePyme) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idSourcePyme: updatedSourcePyme.idSourcePyme,
            imageProfile: updatedSourcePyme.imageProfile,
            imageBanner: updatedSourcePyme.imageBanner,
            idUser: updatedSourcePyme.idUser
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
