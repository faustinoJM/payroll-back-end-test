import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPayrollUseCase } from "./ListPayrollUseCase";

class ListPayrollController {

    async handle(request: Request, response: Response) {
        const { 
          month, 
          year, 
          employee_id, 
          Overtime50, 
          Overtime100,
          absences, 
          totalWorkDaysMonth, 
          totalWorkHourDays,
          cashAdvances,
           backpay,
           bonus } = request.body;

        const listPayrollUseCase = container.resolve(ListPayrollUseCase);

        const payrolls = await listPayrollUseCase.execute({ 
          month, 
          year,
          employee_id,
          Overtime50, 
          Overtime100,
          absences,
          totalWorkDaysMonth, 
          totalWorkHourDays,
          cashAdvances,
          backpay,
          bonus })

        return response.json(payrolls);
    }
}

export { ListPayrollController }