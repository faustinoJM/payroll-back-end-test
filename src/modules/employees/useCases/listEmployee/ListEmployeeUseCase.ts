import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";


@injectable()
class ListEmployeeUseCase {

    constructor(@inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository) {}

    async execute() {
        
        const users = await this.employeeRepository.list();
        users.map(user => {
          console.log(user.salary)
          // user.salary = parseFloat(user.salary.toFixed(2))
        })

        return users;

    }
}

export { ListEmployeeUseCase }