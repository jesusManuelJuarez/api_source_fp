"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateByIdImageController = exports.deleteByIdImageController = exports.getByIdImageController = exports.getAllImageController = exports.createImageController = exports.deleteByIdImageUseCase = exports.updateByIdImageUseCase = exports.getByIdImageUseCase = exports.getAllUseCase = exports.createImageUseCase = exports.mysqlImageRepository = void 0;
const GetAllImageUseCase_1 = require("../application/GetAllImageUseCase");
const CreateImageUseCase_1 = require("../application/CreateImageUseCase");
const GetByIdImageUseCase_1 = require("../application/GetByIdImageUseCase");
const DeleteByIdImageUseCase_1 = require("../application/DeleteByIdImageUseCase");
const UpdateByIdImageUseCase_1 = require("../application/UpdateByIdImageUseCase");
const CreateImageController_1 = require("./controllers/CreateImageController");
const GetAllImageController_1 = require("./controllers/GetAllImageController");
const GetByIdImageController_1 = require("./controllers/GetByIdImageController");
const UpdateByIdImageController_1 = require("./controllers/UpdateByIdImageController");
const DeleteByIdImageController_1 = require("./controllers/DeleteByIdImageController");
const MysqlImageRepository_1 = require("./MysqlImageRepository");
exports.mysqlImageRepository = new MysqlImageRepository_1.MysqlImageRepository();
exports.createImageUseCase = new CreateImageUseCase_1.CreateImageUseCase(exports.mysqlImageRepository);
exports.getAllUseCase = new GetAllImageUseCase_1.GetAllImageUseCase(exports.mysqlImageRepository);
exports.getByIdImageUseCase = new GetByIdImageUseCase_1.GetByIdImageUseCase(exports.mysqlImageRepository);
exports.updateByIdImageUseCase = new UpdateByIdImageUseCase_1.UpdateByIdImageUseCase(exports.mysqlImageRepository);
exports.deleteByIdImageUseCase = new DeleteByIdImageUseCase_1.DeleteByIdImageUseCase(exports.mysqlImageRepository);
exports.createImageController = new CreateImageController_1.CreateImageController(exports.createImageUseCase);
exports.getAllImageController = new GetAllImageController_1.GetAllImageController(exports.getAllUseCase);
exports.getByIdImageController = new GetByIdImageController_1.GetByIdImageController(exports.getByIdImageUseCase);
exports.deleteByIdImageController = new DeleteByIdImageController_1.DeleteByIdImageController(exports.deleteByIdImageUseCase);
exports.updateByIdImageController = new UpdateByIdImageController_1.UpdateByIdImageController(exports.updateByIdImageUseCase);
