import "./provider/index"
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IEmployeesRepository } from "../../modules/employees/repositories/IEmployeesRepository";
import { EmployeesRepository } from "../../modules/employees/infra/typeorm/repositories/EmployeesRepository";
import IDepartmentsRepository from "../../modules/departments/repositories/IDepartmentsRepository";
import DepartmentsRepository from "../../modules/departments/infra/typeorm/repositories/DepartmentsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IEmployeesRepository>(
  "EmployeesRepository",
  EmployeesRepository
)

container.registerSingleton<IDepartmentsRepository>(
  "DepartmentsRepository",
  DepartmentsRepository
)

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
)


