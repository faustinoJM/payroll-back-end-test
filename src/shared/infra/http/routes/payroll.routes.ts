import { Router } from "express";
import { CreatePayrollController } from "../../../../modules/payrolls/useCases/createPayroll/CreatePayrollController";
import { InputPayrollController } from "../../../../modules/payrolls/useCases/inputPayroll/InputPayrollController";
import { ListPayrollController } from "../../../../modules/payrolls/useCases/listPayroll/ListPayrollController";
import { OutputPayrollController } from "../../../../modules/payrolls/useCases/outputPayroll/OutputPayrollController";
import { SinglePayrollController } from "../../../../modules/payrolls/useCases/singlePayroll/SinglePayrollController";

const payrollRouter = Router();
const createEmployeeController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()
const outputPayrollController = new OutputPayrollController();
const inputPayrollController = new InputPayrollController();
const singlePayrollController = new SinglePayrollController()

payrollRouter.post("/", createEmployeeController.handle);
payrollRouter.get("/", outputPayrollController.handle);
payrollRouter.get("/:id", singlePayrollController.handle);
payrollRouter.put("/:id", inputPayrollController.handle);
payrollRouter.post("/", listPayrollController.handle)

export { payrollRouter };
