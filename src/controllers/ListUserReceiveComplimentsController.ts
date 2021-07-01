import { NextFunction, Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListComplimentsUserReceiveService";



class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response, Next: NextFunction) {
        const { user_id } = request

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()
        const compliments = await listUserReceiveComplimentsService.execute(user_id)
        return response.json(compliments)

    }
}

export { ListUserReceiveComplimentsController }