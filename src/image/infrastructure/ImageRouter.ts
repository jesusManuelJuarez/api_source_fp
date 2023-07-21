import express from "express";


import { createImageController } from "./Dependencies";
import { getAllImageController } from "./Dependencies";
import { getByIdImageController } from "./Dependencies";
import { deleteByIdImageController } from "./Dependencies";
import { updateByIdImageController } from "./Dependencies";

export const imageRouter = express.Router();

imageRouter.get("/", getAllImageController.run.bind(getAllImageController));
imageRouter.get("/:idImage", getByIdImageController.run.bind(getByIdImageController));
imageRouter.post("/", createImageController.run.bind(createImageController));
imageRouter.delete("/:idImage", deleteByIdImageController.run.bind(deleteByIdImageController));
imageRouter.put("/:idImage", updateByIdImageController.run.bind(updateByIdImageController));
