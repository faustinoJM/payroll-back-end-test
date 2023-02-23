import { Request, Response } from "express";
import { container } from "tsyringe";
import { OutputPayrollUseCase } from "./OutputPayrollUseCase";


class OutputPayrollController {

    async handle(request: Request, response: Response) {
      

        const outputPayrollUseCase = container.resolve(OutputPayrollUseCase);

        const payrolls = await outputPayrollUseCase.execute()

        return response.json(payrolls);
    }
}

export { OutputPayrollController }