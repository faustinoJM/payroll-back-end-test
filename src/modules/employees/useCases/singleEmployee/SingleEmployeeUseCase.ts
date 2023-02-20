import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";



@injectable()
class SingleEmployeeUseCase {

    constructor(@inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository) {}

    async execute(id: string) {
        
        const user = await this.employeeRepository.findById(id);
        //  console.log("SIngle UseCase: ", user)

        if (!user) {
          throw new AppError("Employee doesn't exists")
        }

        return user;

    }
}

export { SingleEmployeeUseCase }