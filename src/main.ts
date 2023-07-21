import express from "express";
import { imageRouter } from "./image/infrastructure/ImageRouter";
import { sourceUserRouter } from "./sourceUser/infrastructure/SourceUserRouter";
import { sourcePymeRouter } from "./sourcePyme/infrastructure/SourcePymeRouter";
import { Signale } from "signale";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


const app = express();



const signale = new Signale();

app.use(express.json());
const swaggerDocument = YAML.load('swagger.yaml');


// Rutas para los recursos de data fiscal, source y address
app.use("/image", imageRouter);
app.use("/sourceUser", sourceUserRouter);
app.use("/sourcePyme", sourcePymeRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
  signale.success("[Application] Server online on port 3000");
});

