interface ICreateEmployeeDTO {
  id?: string;
  employee_id?: number;
  name: string;
  salary: number;
  dependents: number;
  position_id?: string;
  department_id?: string; 
}

export { ICreateEmployeeDTO };