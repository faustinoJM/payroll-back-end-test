import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEmployeeDTO } from "../../../dtos/ICreateEmployeeDTO";
import { IEmployeesRepository } from "../../../repositories/IEmployeesRepository";
import { Employee } from "../entities/Employee";

class EmployeesRepository implements IEmployeesRepository {
    private repository: Repository<Employee>;

    constructor() {
        this.repository = AppDataSource.getRepository(Employee);
    }
    
    async create({ id, employee_id, name, dependents, salary}: ICreateEmployeeDTO): Promise<void> {
        const user =  this.repository.create({
            name, employee_id, salary, id, dependents
        });
        
        await this.repository.save(user);
    }
    async findByName(name: string): Promise<Employee | null> {
        const user = await this.repository.findOne({ 
          where: { name }
         });

        return user;
    }
    
    async findByEmployeeId(employee_id: number): Promise<Employee | null> {
        const user = await this.repository.findOne({ 
          where: { employee_id }
         });

        return user;
    }

    async findById(id: string): Promise<Employee | null> {
        const user = await this.repository.findOne({
          where: { id }
        });

        return user;
    }

    async list(): Promise<Employee[]> {
        const list = await this.repository.find();

        return list;
    }

}

export { EmployeesRepository };