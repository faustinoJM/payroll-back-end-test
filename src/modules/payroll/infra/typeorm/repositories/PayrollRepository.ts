import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreatePayrollDTO } from "../../../dtos/ICreatePayrollDTO";
import { IPayrollRepository } from "../../../repositories/IPayrollRepository";
import { Payroll } from "../entities/Payroll";

class PayrollRepository implements IPayrollRepository {
    private repository: Repository<Payroll>;

    constructor() {
        this.repository = AppDataSource.getRepository(Payroll);
    }
    
    async create({ id,
      employee_id,
      employee_name,
      position_name,
      departament_name,
      salary_base,
      salary_liquid,
      month,
      year,
      overtime50,
      overtime100,
      month_total_workdays,
      day_total_workhours,
      absences,
      cash_advances,
      backpay,
      bonus,
      IRPS,
      INSS,
      total_income}: ICreatePayrollDTO): Promise<void> {
        const user =  this.repository.create({
          employee_id,
          employee_name,
          position_name,
          departament_name,
          salary_base,
          salary_liquid,
          month,
          year,
          overtime50,
          overtime100,
          month_total_workdays,
          day_total_workhours,
          absences,
          cash_advances,
          backpay,
          bonus,
          IRPS,
          INSS,
          total_income
        });
        
        await this.repository.save(user);
    }
    
    async findByEmployeeId(employee_id: number): Promise<Payroll | null> {
        const user = await this.repository.findOne({ 
          where: { employee_id }
         });

        return user;
    }

    async findById(id: string): Promise<Payroll | null> {
        const user = await this.repository.findOne({
          where: { id }
        });
        // console.log("ByyyyyyyyyyyyID:  ", user)
        return user;
    }

    async list(): Promise<Payroll[]> {
        const list = await this.repository.find();

        return list;
    }

    async delete(id: string): Promise<void> {
      await this.repository.delete(id)
    }

}

export { PayrollRepository };






