import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPayrollUseCase } from "./ListPayrollUseCase";

class ListPayrollController {

    async handle(request: Request, response: Response) {
        const { month, year } = request.body;

        const listPayrollUseCase = container.resolve(ListPayrollUseCase);

        const payrolls = await listPayrollUseCase.execute({ month, year })

        return response.json(payrolls);
    }
}

export { ListPayrollController }