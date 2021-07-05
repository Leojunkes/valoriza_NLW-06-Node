
import { NextFunction, Request } from 'express';
import { ListUserService } from '../services/ListUSerService';
import { Response } from 'express';


class ListUserController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const listUserService = new ListUserService()
        const users = await listUserService.execute()

        return response.json(users)
    }
}

export { ListUserController }