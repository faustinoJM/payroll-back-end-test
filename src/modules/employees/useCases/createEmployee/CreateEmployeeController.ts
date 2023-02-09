import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

class CreateEmployeeController {

    async handle(request: Request, response: Response) {
        const { employee_id, name, dependents, salary, position_id, department_id} = request.body;

        const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

        await createEmployeeUseCase.execute({ employee_id, name, dependents, salary, position_id, department_id })

        return response.status(201).send();
    }
}

export { CreateEmployeeController }