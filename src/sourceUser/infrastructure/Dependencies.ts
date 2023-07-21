import { GetAllSourceUserUseCase } from "../application/GetAllSourceUserUseCase";
import { CreateSourceUserUseCase } from "../application/CreateSourceUserUseCase";
import { GetByIdSourceUserUseCase } from "../application/GetByIdSourceUserUseCase";
import { DeleteByIdSourceUserUseCase } from "../application/DeleteByIdSourceUserUseCase";
import { UpdateByIdSourceUserUseCase } from "../application/UpdateByIdSourceUserUseCase";
import { CreateSourceUserController } from "./controllers/CreateSourceUserController";
import { GetAllSourceUserController } from "./controllers/GetAllSourceUserController";
import { GetByIdSourceUserController } from "./controllers/GetByIdSourceUserController";
import { UpdateByIdSourceUserController } from "./controllers/UpdateByIdSourceUserController";
import { DeleteByIdSourceUserController } from "./controllers/DeleteByIdSourceUserController";
import { MysqlSourceUserRepository } from "./MysqlSourceUserRepository";

export const mysqlSourceUserRepository = new MysqlSourceUserRepository();

export const createSourceUserUseCase = new CreateSourceUserUseCase(
    mysqlSourceUserRepository
  );
export const getAllUseCase = new GetAllSourceUserUseCase(mysqlSourceUserRepository);

export const getByIdSourceUserUseCase = new GetByIdSourceUserUseCase(
    mysqlSourceUserRepository
  );

export const updateByIdSourceUserUseCase = new UpdateByIdSourceUserUseCase(
    mysqlSourceUserRepository
    );

export const deleteByIdSourceUserUseCase = new DeleteByIdSourceUserUseCase(
    mysqlSourceUserRepository
    );

export const createSourceUserController = new CreateSourceUserController(
    createSourceUserUseCase
);
export const getAllSourceUserController = new GetAllSourceUserController(
    getAllUseCase
);

export const getByIdSourceUserController = new GetByIdSourceUserController(
    getByIdSourceUserUseCase
);
export const deleteByIdSourceUserController = new DeleteByIdSourceUserController(
    deleteByIdSourceUserUseCase
    );
export const updateByIdSourceUserController = new UpdateByIdSourceUserController(
    updateByIdSourceUserUseCase
    );
  