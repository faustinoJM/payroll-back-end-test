import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { DeleteEmployeeController } from "../../../../modules/employees/useCases/deleteEmployee/DeleteEmployeeController";

const userRouter = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController()

userRouter.post("/", createUserController.handle);

userRouter.get("/", listUserController.handle);

userRouter.delete("/:id", deleteUserController.handle)

export { userRouter };
