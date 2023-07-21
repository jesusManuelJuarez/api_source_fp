import express from "express";


import { createSourceUserController } from "./Dependencies";
import { getAllSourceUserController } from "./Dependencies";
import { getByIdSourceUserController } from "./Dependencies";
import { deleteByIdSourceUserController } from "./Dependencies";
import { updateByIdSourceUserController } from "./Dependencies";

export const sourceUserRouter = express.Router();

sourceUserRouter.get("/", getAllSourceUserController.run.bind(getAllSourceUserController));
sourceUserRouter.get("/:idSourceUser", getByIdSourceUserController.run.bind(getByIdSourceUserController));
sourceUserRouter.post("/", createSourceUserController.run.bind(createSourceUserController));
sourceUserRouter.delete("/:idSourceUser", deleteByIdSourceUserController.run.bind(deleteByIdSourceUserController));
sourceUserRouter.put("/:idSourceUser", updateByIdSourceUserController.run.bind(updateByIdSourceUserController));
