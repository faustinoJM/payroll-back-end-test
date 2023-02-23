import { Router } from "express";
import { CreatePayrollController } from "../../../../modules/payrolls/useCases/createPayroll/CreatePayrollController";
import { ListPayrollController } from "../../../../modules/payrolls/useCases/listPayroll/ListPayrollController";
import { OutputPayrollController } from "../../../../modules/payrolls/useCases/outputPayroll/OutputPayrollController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()
const outputPayrollController = new OutputPayrollController();

payrollRouter.get("/zabuza", createEmployeeController.handle);
payrollRouter.get("/list", outputPayrollController.handle);
payrollRouter.post("/", listPayrollController.handle)

export { payrollRouter };
