import { Request, Response } from "express";
import { UpdateByIdSourceUserUseCase } from "../../application/UpdateByIdSourceUserUseCase";

export class UpdateByIdSourceUserController {
  constructor(readonly updateByIdSourceUserUseCase: UpdateByIdSourceUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idSourceUser);
    const newSourceUser = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedSourceUser = await this.updateByIdSourceUserUseCase.run(id, newSourceUser);

      if (updatedSourceUser) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idSourceUser: updatedSourceUser.idSourceUser,
            imageProfile: updatedSourceUser.imageProfile,
            idUser: updatedSourceUser.idUser
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
