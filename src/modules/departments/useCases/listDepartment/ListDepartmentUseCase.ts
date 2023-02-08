import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import IDepartmentsRepository from "../../repositories/IDepartmentsRepository";

@injectable()
class ListDepartmentUseCase {

    constructor(@inject("DepartmentsRepository")
        private departmentRepository: IDepartmentsRepository) {}

    async execute() {
        
        const departments = await this.departmentRepository.list();

        return departments;

    }
}

export { ListDepartmentUseCase }