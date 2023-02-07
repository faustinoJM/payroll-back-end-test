interface ICreateEmployeeDTO {
  id?: string;
  employee_id: number;
  name: string;
  salary: number;
  dependents: number;
}

export { ICreateEmployeeDTO };