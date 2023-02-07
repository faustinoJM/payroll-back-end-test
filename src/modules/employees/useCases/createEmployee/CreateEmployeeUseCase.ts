import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";


@injectable()
class CreateEmployeeUseCase {

    constructor(@inject("EmployeesRepository")
        private userRepository: IEmployeesRepository) {}

    async execute({ employee_id, name, salary, dependents }: ICreateEmployeeDTO) {
        
        const UserAlreadyExists = await this.userRepository.findByName(name);

        if(UserAlreadyExists) {
            throw new AppError("Employee Already Exists");
        }
        await this.userRepository.create({ employee_id, name, dependents, salary });

    }
}

export { CreateEmployeeUseCase }