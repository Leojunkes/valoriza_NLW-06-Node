import { Request, Response, NextFunction } from "express"
import { ListTagsService } from "../services/listTagService"

class ListTagsController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const listTagsService = new ListTagsService()

        const tags = await listTagsService.execute()

        return response.json(tags)
    }
}

export {ListTagsController}