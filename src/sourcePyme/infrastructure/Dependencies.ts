import { GetAllSourcePymeUseCase } from "../application/GetAllSourcePymeUseCase";
import { CreateSourcePymeUseCase } from "../application/CreateSourcePymeUseCase";
import { GetByIdSourcePymeUseCase } from "../application/GetByIdSourcePymeUseCase";
import { DeleteByIdSourcePymeUseCase } from "../application/DeleteByIdSourcePymeUseCase";
import { UpdateByIdSourcePymeUseCase } from "../application/UpdateByIdSourcePymeUseCase";
import { CreateSourcePymeController } from "./controllers/CreateSourcePymeController";
import { GetAllSourcePymeController } from "./controllers/GetAllSourcePymeController";
import { GetByIdSourcePymeController } from "./controllers/GetByIdSourcePymeController";
import { UpdateByIdSourcePymeController } from "./controllers/UpdateByIdSourcePymeController";
import { DeleteByIdSourcePymeController } from "./controllers/DeleteByIdSourcePymeController";
import { MysqlSourcePymeRepository } from "./MysqlSourcePymeRepository";

export const mysqlSourcePymeRepository = new MysqlSourcePymeRepository();

export const createSourcePymeUseCase = new CreateSourcePymeUseCase(
    mysqlSourcePymeRepository
  );
export const getAllUseCase = new GetAllSourcePymeUseCase(mysqlSourcePymeRepository);

export const getByIdSourcePymeUseCase = new GetByIdSourcePymeUseCase(
    mysqlSourcePymeRepository
  );

export const updateByIdSourcePymeUseCase = new UpdateByIdSourcePymeUseCase(
    mysqlSourcePymeRepository
    );

export const deleteByIdSourcePymeUseCase = new DeleteByIdSourcePymeUseCase(
    mysqlSourcePymeRepository
    );

export const createSourcePymeController = new CreateSourcePymeController(
    createSourcePymeUseCase
);
export const getAllSourcePymeController = new GetAllSourcePymeController(
    getAllUseCase
);

export const getByIdSourcePymeController = new GetByIdSourcePymeController(
    getByIdSourcePymeUseCase
);
export const deleteByIdSourcePymeController = new DeleteByIdSourcePymeController(
    deleteByIdSourcePymeUseCase
    );
export const updateByIdSourcePymeController = new UpdateByIdSourcePymeController(
    updateByIdSourcePymeUseCase
    );
  