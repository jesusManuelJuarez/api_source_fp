"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceUserRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.sourceUserRouter = express_1.default.Router();
exports.sourceUserRouter.get("/", Dependencies_2.getAllSourceUserController.run.bind(Dependencies_2.getAllSourceUserController));
exports.sourceUserRouter.get("/:idSourceUser", Dependencies_3.getByIdSourceUserController.run.bind(Dependencies_3.getByIdSourceUserController));
exports.sourceUserRouter.post("/", Dependencies_1.createSourceUserController.run.bind(Dependencies_1.createSourceUserController));
exports.sourceUserRouter.delete("/:idSourceUser", Dependencies_4.deleteByIdSourceUserController.run.bind(Dependencies_4.deleteByIdSourceUserController));
exports.sourceUserRouter.put("/:idSourceUser", Dependencies_5.updateByIdSourceUserController.run.bind(Dependencies_5.updateByIdSourceUserController));
