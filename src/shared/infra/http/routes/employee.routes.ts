import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { DeleteEmployeeController } from "../../../../modules/employees/useCases/deleteEmployee/DeleteEmployeeController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { SingleEmployeeController } from "../../../../modules/employees/useCases/singleEmployee/SingleEmployeeController";

const employeeRouter = Router();
const createEmployeeController = new CreateEmployeeController();
const listEmployeeController = new ListEmployeeController();
const singleEmployeeController = new SingleEmployeeController()
const deleteEmployeeController = new DeleteEmployeeController()

employeeRouter.post("/", createEmployeeController.handle);

employeeRouter.get("/", listEmployeeController.handle);

employeeRouter.get("/:id", singleEmployeeController.handle);

employeeRouter.delete("/:id", deleteEmployeeController.handle)

export { employeeRouter };
