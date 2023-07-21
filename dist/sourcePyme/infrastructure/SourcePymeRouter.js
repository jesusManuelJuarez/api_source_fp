"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourcePymeRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.sourcePymeRouter = express_1.default.Router();
exports.sourcePymeRouter.get("/", Dependencies_2.getAllSourcePymeController.run.bind(Dependencies_2.getAllSourcePymeController));
exports.sourcePymeRouter.get("/:idSourcePyme", Dependencies_3.getByIdSourcePymeController.run.bind(Dependencies_3.getByIdSourcePymeController));
exports.sourcePymeRouter.post("/", Dependencies_1.createSourcePymeController.run.bind(Dependencies_1.createSourcePymeController));
exports.sourcePymeRouter.delete("/:idSourcePyme", Dependencies_4.deleteByIdSourcePymeController.run.bind(Dependencies_4.deleteByIdSourcePymeController));
exports.sourcePymeRouter.put("/:idSourcePyme", Dependencies_5.updateByIdSourcePymeController.run.bind(Dependencies_5.updateByIdSourcePymeController));
