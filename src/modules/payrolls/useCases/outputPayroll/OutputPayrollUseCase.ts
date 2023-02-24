import { inject, injectable } from "tsyringe";
import AppError  from "../../../../shared/errors/AppError";
import { IEmployeesRepository } from "../../../employees/repositories/IEmployeesRepository";
import IPositionsRepository from "../../../positions/repositories/IPositionsRepository";
import IDepartmentsRepository from "../../../departments/repositories/IDepartmentsRepository";
import { ICreatePayrollDTO2 } from "../../dtos/ICreatePayrollDTO2";
import { IPayrollRepository } from "../../repositories/IPayrollRepository";

export interface ISalario {
  salarioLiquido?: number;
  coeficiente: number;
  limiteNTributavel: number ;
  AResult?: number;
  AxB?: number;
  valorReter?: number;
  impostoPagarIRPS?: number;
}

export interface IPayrollDemo {
  overtime50?: number;
  overtime100?: number;
  month_total_workdays?: number;
  day_total_workhours?: number;
  totalAbsences?: number;
  cash_advances?: number;
  backpay?: number;
  bonus?: number;
  salary_liquid?: number;
  IRPS?: number;
  INSS?: number
}

@injectable()
class OutputPayrollUseCase {

    constructor(@inject("PayrollRepository")
    private payrollRepository: IPayrollRepository,
      
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository,
        
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository,

        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository
        ) {}

    async execute(year: number, month: string) {

        const payrolls = await this.payrollRepository.list()
        // const payrollByMonthYear = this.payrollRepository.findAllByYearAndByMonth(year, month)
        // const payrollMonth = this.payrollRepository.findAllByMonth(month)
        // const payrollByYear = this.payrollRepository.findAllByYear(year)

        if(month && year && payrolls) {
          return payrolls.filter(payroll => payroll.month === month && payroll.year === year)
        } else if(!month && year && payrolls) {
          return payrolls.filter(payroll => payroll.year === year)
        } else if(month && !year && payrolls) {
          return payrolls.filter(payroll => payroll.month === month)
        } //else {
        //  return payrolls
        //}

        return payrolls
    }
}
export { OutputPayrollUseCase }

