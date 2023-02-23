import { Router } from "express";
import { CreatePayrollController } from "../../../../modules/payroll/useCases/createPayroll/CreatePayrollController";
import { ListPayrollController } from "../../../../modules/payroll/useCases/listPayroll/ListPayrollController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()

payrollRouter.get("/zabuza", createEmployeeController.handle);
payrollRouter.post("/", listPayrollController.handle)

export { payrollRouter };
