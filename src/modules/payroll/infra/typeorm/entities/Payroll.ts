import { Column, CreateDateColumn, Double, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Department from "../../../../departments/infra/typeorm/entities/Department";
import { Employee } from "../../../../employees/infra/typeorm/entities/Employee";
import Position from "../../../../positions/infra/typeorm/entities/Position";

@Entity("payrolls")
class Payroll {
    @PrimaryColumn('uuid')
    id?: string;
  
    @Column()
    employee_id: string;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: "employee_id" })
    employee: Employee

    @Column()
    salary_base: number;

    @Column()
    salary_liquid: number;

    @Column()
    month: number;

    @Column()
    year: number;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Payroll };