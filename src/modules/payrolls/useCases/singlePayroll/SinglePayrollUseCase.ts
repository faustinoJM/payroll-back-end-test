import { inject, injectable } from "tsyringe";
import AppError  from "../../../../shared/errors/AppError";
import IPositionsRepository from "../../../positions/repositories/IPositionsRepository";
import IDepartmentsRepository from "../../../departments/repositories/IDepartmentsRepository";
import { IPayrollRepository } from "../../repositories/IPayrollRepository";
import { IEmployeesRepository } from "../../../employees/repositories/IEmployeesRepository";



@injectable()
class SinglePayrollUseCase {

    constructor(@inject("PayrollRepository")
    private payrollRepository: IPayrollRepository,
      
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository,
        
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository,

        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository) {}

    async execute(id: string) {
        
        const payroll = await this.payrollRepository.findById(id);
        //  console.log("SIngle UseCase: ", payroll)

        if (!payroll) {
          throw new AppError("Payroll doesn't exists")
        }
        const employee = await this.employeeRepository.findById(payroll.employee_uid)

        const positionName = await this.positionsRepository.findById(employee!.position_id)
        const departmentName = await this.departmentsRepository.findById(employee!.department_id)
       
        return payroll;

        

    }
}

export { SinglePayrollUseCase }