import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("employees")
class Employee {
    @PrimaryColumn('uuid')
    id?: string;
  
    @Column()
    employee_id: number;

    @Column()
    name: string;

    @Column()
    salary: number;

    @Column()
    dependents: number;

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

export { Employee };