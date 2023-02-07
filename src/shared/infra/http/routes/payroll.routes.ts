import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { CreatePayrollController } from "../../../../modules/employees/useCases/createPayroll/CreatePayrollController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();

payrollRouter.get("/", createEmployeeController.handle);

export { payrollRouter };
