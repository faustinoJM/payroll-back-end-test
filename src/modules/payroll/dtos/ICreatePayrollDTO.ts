import { ISalario, IPayrollDemo } from "../useCases/listPayroll/ListPayrollUseCase";

interface ICreatePayrollDTO {
  id?: string;
  employee_id?: string;
  name?: string;
  dependents?: number;
  positionName?: string | null;
  departamentsName?: string | null;
  salary_base?: number | string;
  salary_liquid?: number | string;
  month?: number;
  year?: number;
  Overtime50?: number;
  Overtime100?: number;
  totalWorkDaysMonth?: number;
  totalWorkHourDays?: number;
  absences?: number;
  cashAdvances?: number;
  backpay?: number;
  bonus?: number;
  IRPS?: number | string;
  INSS?: number | string;
  totalIncome?: number | string
  tabelaSalario?: ISalario;
  payrollDemo?: IPayrollDemo;
}

export { ICreatePayrollDTO };