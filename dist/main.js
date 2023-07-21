"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImageRouter_1 = require("./image/infrastructure/ImageRouter");
const SourceUserRouter_1 = require("./sourceUser/infrastructure/SourceUserRouter");
const SourcePymeRouter_1 = require("./sourcePyme/infrastructure/SourcePymeRouter");
const signale_1 = require("signale");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
const swaggerDocument = yamljs_1.default.load('swagger.yaml');
// Rutas para los recursos de data fiscal, source y address
app.use("/image", ImageRouter_1.imageRouter);
app.use("/sourceUser", SourceUserRouter_1.sourceUserRouter);
app.use("/sourcePyme", SourcePymeRouter_1.sourcePymeRouter);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.listen(3000, () => {
    signale.success("[Application] Server online on port 3000");
});
