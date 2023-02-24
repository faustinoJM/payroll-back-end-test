import { Router } from "express";
import { CreatePayrollController } from "../../../../modules/payrolls/useCases/createPayroll/CreatePayrollController";
import { InputPayrollController } from "../../../../modules/payrolls/useCases/inputPayroll/InputPayrollController";
import { ListPayrollController } from "../../../../modules/payrolls/useCases/listPayroll/ListPayrollController";
import { OutputPayrollController } from "../../../../modules/payrolls/useCases/outputPayroll/OutputPayrollController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()
const outputPayrollController = new OutputPayrollController();
const inputPayrollController = new InputPayrollController();

payrollRouter.get("/zabuza", createEmployeeController.handle);
payrollRouter.get("/output", outputPayrollController.handle);
payrollRouter.get("/input", inputPayrollController.handle);
payrollRouter.post("/", listPayrollController.handle)

export { payrollRouter };
