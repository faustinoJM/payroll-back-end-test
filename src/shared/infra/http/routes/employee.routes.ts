import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { SingleEmployeeController } from "../../../../modules/employees/useCases/singleEmployee/SingleEmployeeController";

const employeeRouter = Router();
const createEmployeeController = new CreateEmployeeController();
const listEmployeeController = new ListEmployeeController();
const singleEmployeeController = new SingleEmployeeController()

employeeRouter.post("/", createEmployeeController.handle);

employeeRouter.get("/", listEmployeeController.handle);

employeeRouter.get("/:id", singleEmployeeController.handle);

export { employeeRouter };
