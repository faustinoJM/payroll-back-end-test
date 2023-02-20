import { Request, Response } from "express";
import { container } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { ListUserUseCase } from "./ListUserUseCase";

interface IList {
  password?: string;
  is_admin?: boolean
}
class DeleteUserController {

    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        const user = await deleteUserUseCase.execute(id)
      
      return response.json(user);
    }
}

export { DeleteUserController }