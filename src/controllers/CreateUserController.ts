import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersService";


class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;
        const createUserService = new CreateUsersService()
        const user = await createUserService.execute({ name, email, admin })

        return response.json(user)
    }

}
export { CreateUserController }