import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { CreatePayrollController } from "../../../../modules/employees/useCases/createPayroll/CreatePayrollController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { ListPayrollController } from "../../../../modules/payroll/useCases/listPayroll/ListPayrollController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()

payrollRouter.get("/", createEmployeeController.handle);
payrollRouter.post("/", listPayrollController.handle)

export { payrollRouter };
