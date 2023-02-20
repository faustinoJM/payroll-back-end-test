import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { DeleteEmployeeController } from "../../../../modules/employees/useCases/deleteEmployee/DeleteEmployeeController";

const userRouter = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteEmployeeController = new DeleteEmployeeController()

userRouter.post("/", createUserController.handle);

userRouter.get("/", listUserController.handle);

userRouter.delete("/", deleteEmployeeController.handle)

export { userRouter };
