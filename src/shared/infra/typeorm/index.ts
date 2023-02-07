import { DataSource} from "typeorm"
import { User } from "../../../modules/accounts/infra/typeorm/entities/User"
import { UserTokens } from "../../../modules/accounts/infra/typeorm/entities/UserTokens"
import { Employee } from "../../../modules/employees/infra/typeorm/entities/Employee"


const options:  any = {
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "12345",
    database: "payroll_test",
    logging: true,
    synchronize: false,
    entities: [
      User, UserTokens, Employee
        // "./src/modules/users/infra/typeorm/entities/.ts",
        // "./src/modules/appointments/infra/typeorm/entities/.ts"

    ],
    subscribers: [
        "subscriber/*.js"
    ],
    entitySchemas: [
        "schema/*.json"
    ],
    migrations: [
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    cli: {
        entitiesDir: "entity",
        migrationsDir: "src/database",
        subscribersDir: "subscriber"
    }
}

 export const AppDataSource = new DataSource(options)


