import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import { ICreatePayrollDTO } from "../../dtos/ICreatePayrollDTO";
import { IEmployeesRepository } from "../../../employees/repositories/IEmployeesRepository";
import IPositionsRepository from "../../../positions/repositories/IPositionsRepository";
import IDepartmentsRepository from "../../../departments/repositories/IDepartmentsRepository";

export interface ISalario {
  salarioLiquido?: number;
  coeficiente: number;
  limiteNTributavel: number ;
  AResult?: number;
  AxB?: number;
  valorReter?: number;
  impostoPagarIRPS?: number;
}

@injectable()
class ListPayrollUseCase {

    constructor(@inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository,
        
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository,

        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository
        ) {}

    async execute({  month, year, name, employee_id, salary_base, salary_liquid }: ICreatePayrollDTO) {
        const listEmployeesPayrolls: ICreatePayrollDTO[] = [];
        // let employeePayroll: ICreatePayrollTO = {}
        const employees = await this.employeeRepository.list();
        const positions = await this.positionsRepository.list()
        const departments = await this.departmentsRepository.list()

        if(employees.length < 0) {
            throw new AppError("Employees Doesn't Exists");
        }

        function positionName(positionId: string) {
          return positions.find((position) => position.id === positionId)
        }

        function departmentName(departmentId: string) {
          return departments.find((department) => department.id === departmentId)
        }

        employees.map((employee) =>{
         let employeePayroll: ICreatePayrollDTO = {
            employee_id: employee.id,
            name: employee.name,
            dependents: employee.dependents,
            positionName: positionName(employee.position_id!)?.name,
            departamentsName: departmentName(employee.department_id!)?.name,
            salary_base: employee.salary,
            salary_liquid: calcularSalario(employee.salary, employee.dependents),
            month: month,
            year: year,
            tabelaSalario: retornarTabela(employee.salary, employee.dependents)

          };

          // let employeePayroll: ICreatePayrollDTO = {}
          // employeePayroll.employee_id = employe.id;
          // employeePayroll.name = employe.name;
          // employeePayroll.salary_base = employe.salary;
          // employeePayroll.salary_liquid = employe.salary;
          // employeePayroll.month = month;
          // employeePayroll.year = year;

          listEmployeesPayrolls.push(employeePayroll)

        })

        return listEmployeesPayrolls
    }
}

function calcularSalario(salary: number, dependents: number) {
  let coeficiente = CalcCoeficiente(salary)
  let limiteNTributavel = CalcLimiteNaoTributavel(salary)
  let AResult = salary - limiteNTributavel!
  let AxB = AResult * coeficiente!
  let valorReter = CalcValorReter(limiteNTributavel!, dependents)
  let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter!)
  let salarioLiquido = calcSalarioLiquido(salary, impostoPagarIRPS)

  // const salario: ISalario = {
  //   coeficiente:  coeficiente!,
  //   limiteNTributavel: limiteNTributavel!,
  //   AResult: AResult,
  //   AxB: AxB,
  //   valorReter: valorReter,
  //   impostoPagarIRPS: impostoPagarIRPS,
  //   salarioLiquido: salarioLiquido

  // }
  
  return salarioLiquido;
}

function retornarTabela(salary: number, dependents: number) {
  let coeficiente = CalcCoeficiente(salary)
  let limiteNTributavel = CalcLimiteNaoTributavel(salary)
  let AResult = salary - limiteNTributavel!
  let AxB = AResult * coeficiente!
  let valorReter = CalcValorReter(limiteNTributavel!, dependents)
  let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter!)
  let salarioLiquido = calcSalarioLiquido(salary, impostoPagarIRPS)

  const salario: ISalario = {
    coeficiente:  coeficiente!,
    limiteNTributavel: limiteNTributavel!,
    AResult: AResult,
    AxB: AxB,
    valorReter: valorReter!,
    impostoPagarIRPS: impostoPagarIRPS,
    salarioLiquido: salarioLiquido

  }
  
  return salario;
}

function CalcCoeficiente (salary: number) {
  if (salary <= 20249.99) 
    return 0;
    if (salary >= 20250 && salary < 20750)
      return 0.1;
      if (salary >= 20750 && salary < 21000)
        return 0.1;
        if (salary >= 21000 && salary < 21250)
          return 0.1;
          if (salary >= 21250 && salary < 21750)
            return 0.1;
            if (salary >= 21750 && salary < 22250)
              return 0.1;
              if (salary >= 22250 && salary < 32750)
                return 0.15;
                if (salary >= 32750 && salary < 60750)
                  return 0.2;
                  if (salary >= 60750 && salary < 144750)
                    return 0.25;
                    if (salary <= 144750)
                      return 0.32;
                      if (salary > 144750)
                        return 0.32;
  
   return null
}

function CalcLimiteNaoTributavel(salary: number) {
  if (salary <= 20249.99) 
    return 20249.99;
    if (salary >= 20250 && salary < 20750)
      return 20250;
      if (salary >= 20750 && salary < 21000)
        return 20750;
        if (salary >= 21000 && salary < 21250)
          return 21000;
          if (salary >= 21250 && salary < 21750)
            return 21250;
            if (salary >= 21750 && salary < 22250)
              return 21750;
              if (salary >= 22250 && salary < 32750)
                return 22250;
                if (salary >= 32750 && salary < 60750)
                  return 32750;
                  if (salary >= 60750 && salary < 144750)
                    return 60750;
                    if (salary <= 144750)
                      return 144750;
                      if (salary > 144750)
                        return 144750;
  
  return null
}

function CalcValorReter(LimiteNTributavel: number, dependents: number) {
  if (LimiteNTributavel == 20249.99) 
    return 0;
    if (LimiteNTributavel == 20250)
      return 0;
      if (LimiteNTributavel == 20750) {
        if(dependents == 0)
          return 50;
        else 
          return 0
        } 
        if (LimiteNTributavel == 21000) {
          if(dependents == 0)
            return 75;
          if(dependents == 1)
            return 25;
          else 
            return 0;
        }
          if (LimiteNTributavel == 21250) {
            if(dependents == 0)
              return 100;
            if(dependents == 1)
              return 50;
            if(dependents == 2)
              return 25;
            else 
              return 0;
          }
            if (LimiteNTributavel == 21750) {
              if(dependents == 0)
                return 150;
              if(dependents == 1)
                return 100;
              if(dependents == 2)
                return 75;
              if(dependents == 3)
                return 50;
              else 
                return 0;
            }
              if (LimiteNTributavel == 22250) {
                if(dependents == 0)
                return 200;
                if(dependents == 1)
                  return 150;
                if(dependents == 2)
                  return 125;
                if(dependents == 3)
                  return 100;
                if(dependents == 4)
                  return 50;
                else 
                  return 50;
              }
                if (LimiteNTributavel == 32750) {
                  if(dependents == 0)
                  return 1775;
                  if(dependents == 1)
                    return 1725;
                  if(dependents == 2)
                    return 1700;
                  if(dependents == 3)
                    return 1675;
                  if(dependents == 4)
                    return 1625;
                  else 
                    return 1625;
                }
                  if (LimiteNTributavel == 60750) {
                    if(dependents == 0)
                    return 7375;
                    if(dependents == 1)
                      return 7325;
                    if(dependents == 2)
                      return 7300;
                    if(dependents == 3)
                      return 7275;
                    if(dependents == 4)
                      return 7225;
                    else 
                      return 7225;
                  }
                    if (LimiteNTributavel == 144750) {
                      if(dependents == 0)
                        return 28375;
                      if(dependents == 1)
                        return 28325;
                      if(dependents == 2)
                        return 28300;
                      if(dependents == 3)
                        return 28275;
                      if(dependents == 4)
                        return 28225;
                      else 
                        return 28225;
                    }
  return  null
}

function calcImpostoPagarIRPS(axb: number, valorReter: number) {
  return axb + valorReter
}

function calcSalarioLiquido(salario: number, IRPS: number) {
  return salario - IRPS - (salario * 0.03);
}

export { ListPayrollUseCase }

