import { ICreatePayrollDTO } from "../dtos/ICreatePayrollDTO";
import { Payroll } from "../infra/typeorm/entities/Payroll";

interface IPayrollRepository {
    create(data: ICreatePayrollDTO): Promise<void>;
    
    findByEmployeeId(employee_id: number): Promise<Payroll | null>;
    findById(id: string): Promise<Payroll | null>;
    delete(id: string): Promise<void>

    list(): Promise<Payroll[]>;
    
}

export { IPayrollRepository }