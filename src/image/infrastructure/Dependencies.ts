import { GetAllImageUseCase } from "../application/GetAllImageUseCase";
import { CreateImageUseCase } from "../application/CreateImageUseCase";
import { GetByIdImageUseCase } from "../application/GetByIdImageUseCase";
import { DeleteByIdImageUseCase } from "../application/DeleteByIdImageUseCase";
import { UpdateByIdImageUseCase } from "../application/UpdateByIdImageUseCase";
import { CreateImageController } from "./controllers/CreateImageController";
import { GetAllImageController } from "./controllers/GetAllImageController";
import { GetByIdImageController } from "./controllers/GetByIdImageController";
import { UpdateByIdImageController } from "./controllers/UpdateByIdImageController";
import { DeleteByIdImageController } from "./controllers/DeleteByIdImageController";
import { MysqlImageRepository } from "./MysqlImageRepository";

export const mysqlImageRepository = new MysqlImageRepository();

export const createImageUseCase = new CreateImageUseCase(
    mysqlImageRepository
  );
export const getAllUseCase = new GetAllImageUseCase(mysqlImageRepository);

export const getByIdImageUseCase = new GetByIdImageUseCase(
    mysqlImageRepository
  );

export const updateByIdImageUseCase = new UpdateByIdImageUseCase(
    mysqlImageRepository
    );

export const deleteByIdImageUseCase = new DeleteByIdImageUseCase(
    mysqlImageRepository
    );

export const createImageController = new CreateImageController(
    createImageUseCase
);
export const getAllImageController = new GetAllImageController(
    getAllUseCase
);

export const getByIdImageController = new GetByIdImageController(
    getByIdImageUseCase
);
export const deleteByIdImageController = new DeleteByIdImageController(
    deleteByIdImageUseCase
    );
export const updateByIdImageController = new UpdateByIdImageController(
    updateByIdImageUseCase
);