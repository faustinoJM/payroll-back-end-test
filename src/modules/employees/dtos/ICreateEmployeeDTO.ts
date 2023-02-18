interface ICreateEmployeeDTO {
  id?: string;
  employee_id?: number;
  name: string;
  salary: string;
  dependents: number;
  position_id?: string;
  department_id?: string; 
  birth_date?: Date;
}

export { ICreateEmployeeDTO };