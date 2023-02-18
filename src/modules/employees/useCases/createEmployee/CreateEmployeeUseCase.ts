import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";


@injectable()
class CreateEmployeeUseCase {

    constructor(@inject("EmployeesRepository")
        private userRepository: IEmployeesRepository) {}

    async execute({ employee_id, name, salary, dependents, position_id, department_id, birth_date }: ICreateEmployeeDTO) {
        
        const UserAlreadyExists = await this.userRepository.findByName(name);

        if(UserAlreadyExists) {
            throw new AppError("Employee Already Exists");
        }
        await this.userRepository.create({ employee_id, name, dependents, salary, position_id, department_id, birth_date });

    }
}

export { CreateEmployeeUseCase }