import express from "express";


import { createSourcePymeController } from "./Dependencies";
import { getAllSourcePymeController } from "./Dependencies";
import { getByIdSourcePymeController } from "./Dependencies";
import { deleteByIdSourcePymeController } from "./Dependencies";
import { updateByIdSourcePymeController } from "./Dependencies";
export const sourcePymeRouter = express.Router();

sourcePymeRouter.get("/", getAllSourcePymeController.run.bind(getAllSourcePymeController));
sourcePymeRouter.get("/:idSourcePyme", getByIdSourcePymeController.run.bind(getByIdSourcePymeController));
sourcePymeRouter.post("/", createSourcePymeController.run.bind(createSourcePymeController));
sourcePymeRouter.delete("/:idSourcePyme", deleteByIdSourcePymeController.run.bind(deleteByIdSourcePymeController));
sourcePymeRouter.put("/:idSourcePyme", updateByIdSourcePymeController.run.bind(updateByIdSourcePymeController));
