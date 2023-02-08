import { Router } from "express";
import { CreateDepartmentController } from "../../../../modules/departments/useCases/createDepartment/CreateDepartmentController";
import { ListDepartmentController } from "../../../../modules/departments/useCases/listDepartment/ListDepartmentController";
import { SingleDepartmentController } from "../../../../modules/departments/useCases/singleDepartment/SingleDepartmentController";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { SingleEmployeeController } from "../../../../modules/employees/useCases/singleEmployee/SingleEmployeeController";

const departmentRouter = Router();
const listDepartmentController = new ListDepartmentController();
const createDepartmentController = new CreateDepartmentController();
const singleDepartmentController = new SingleDepartmentController()

departmentRouter.post("/", createDepartmentController.handle);

departmentRouter.get("/", listDepartmentController.handle);

departmentRouter.get("/:id", singleDepartmentController.handle);

export { departmentRouter };
