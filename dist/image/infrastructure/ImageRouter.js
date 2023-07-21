"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.imageRouter = express_1.default.Router();
exports.imageRouter.get("/", Dependencies_2.getAllImageController.run.bind(Dependencies_2.getAllImageController));
exports.imageRouter.get("/:idImage", Dependencies_3.getByIdImageController.run.bind(Dependencies_3.getByIdImageController));
exports.imageRouter.post("/", Dependencies_1.createImageController.run.bind(Dependencies_1.createImageController));
exports.imageRouter.delete("/:idImage", Dependencies_4.deleteByIdImageController.run.bind(Dependencies_4.deleteByIdImageController));
exports.imageRouter.put("/:idImage", Dependencies_5.updateByIdImageController.run.bind(Dependencies_5.updateByIdImageController));
