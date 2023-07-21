"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateByIdSourceUserController = exports.deleteByIdSourceUserController = exports.getByIdSourceUserController = exports.getAllSourceUserController = exports.createSourceUserController = exports.deleteByIdSourceUserUseCase = exports.updateByIdSourceUserUseCase = exports.getByIdSourceUserUseCase = exports.getAllUseCase = exports.createSourceUserUseCase = exports.mysqlSourceUserRepository = void 0;
const GetAllSourceUserUseCase_1 = require("../application/GetAllSourceUserUseCase");
const CreateSourceUserUseCase_1 = require("../application/CreateSourceUserUseCase");
const GetByIdSourceUserUseCase_1 = require("../application/GetByIdSourceUserUseCase");
const DeleteByIdSourceUserUseCase_1 = require("../application/DeleteByIdSourceUserUseCase");
const UpdateByIdSourceUserUseCase_1 = require("../application/UpdateByIdSourceUserUseCase");
const CreateSourceUserController_1 = require("./controllers/CreateSourceUserController");
const GetAllSourceUserController_1 = require("./controllers/GetAllSourceUserController");
const GetByIdSourceUserController_1 = require("./controllers/GetByIdSourceUserController");
const UpdateByIdSourceUserController_1 = require("./controllers/UpdateByIdSourceUserController");
const DeleteByIdSourceUserController_1 = require("./controllers/DeleteByIdSourceUserController");
const MysqlSourceUserRepository_1 = require("./MysqlSourceUserRepository");
exports.mysqlSourceUserRepository = new MysqlSourceUserRepository_1.MysqlSourceUserRepository();
exports.createSourceUserUseCase = new CreateSourceUserUseCase_1.CreateSourceUserUseCase(exports.mysqlSourceUserRepository);
exports.getAllUseCase = new GetAllSourceUserUseCase_1.GetAllSourceUserUseCase(exports.mysqlSourceUserRepository);
exports.getByIdSourceUserUseCase = new GetByIdSourceUserUseCase_1.GetByIdSourceUserUseCase(exports.mysqlSourceUserRepository);
exports.updateByIdSourceUserUseCase = new UpdateByIdSourceUserUseCase_1.UpdateByIdSourceUserUseCase(exports.mysqlSourceUserRepository);
exports.deleteByIdSourceUserUseCase = new DeleteByIdSourceUserUseCase_1.DeleteByIdSourceUserUseCase(exports.mysqlSourceUserRepository);
exports.createSourceUserController = new CreateSourceUserController_1.CreateSourceUserController(exports.createSourceUserUseCase);
exports.getAllSourceUserController = new GetAllSourceUserController_1.GetAllSourceUserController(exports.getAllUseCase);
exports.getByIdSourceUserController = new GetByIdSourceUserController_1.GetByIdSourceUserController(exports.getByIdSourceUserUseCase);
exports.deleteByIdSourceUserController = new DeleteByIdSourceUserController_1.DeleteByIdSourceUserController(exports.deleteByIdSourceUserUseCase);
exports.updateByIdSourceUserController = new UpdateByIdSourceUserController_1.UpdateByIdSourceUserController(exports.updateByIdSourceUserUseCase);