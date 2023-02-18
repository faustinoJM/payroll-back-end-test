import { Column, CreateDateColumn, Double, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Department from "../../../../departments/infra/typeorm/entities/Department";
import Position from "../../../../positions/infra/typeorm/entities/Position";

@Entity("employees")
class Employee {
    @PrimaryColumn('uuid')
    id?: string;
  
    @Column()
    employee_id: number;

    @Column()
    name: string;

    @Column()
    salary: string;

    @Column()
    dependents: number;

    @Column()
    birth_date: Date; 

    @Column()
    position_id: string;
    
    @ManyToOne(() => Position)
    @JoinColumn({ name: "position_id"})
    position: Position;

    @Column()
    department_id: string; 

    @ManyToOne(() => Department)
    @JoinColumn({ name: "department_id"})
    department: Department;

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