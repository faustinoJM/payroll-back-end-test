import { ISalario } from "../useCases/listPayroll/ListPayrollUseCase";

interface ICreatePayrollDTO {
  id?: string;
  employee_id?: string;
  name?: string;
  dependents?: number;
  positionName?: string | null;
  departamentsName?: string | null;
  salary_base?: number;
  salary_liquid?: number;
  month?: number;
  year?: number;
  tabelaSalario?: ISalario;
}

export { ICreatePayrollDTO };