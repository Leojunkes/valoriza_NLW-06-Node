import { Request, Response } from 'express'
import { AuthenticatedUserService } from '../services/AuthenticatedUserService'

class AuthenticatedUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const authenticatedUserService = new AuthenticatedUserService()

        const token = await authenticatedUserService.execute({
            email,
            password
        })
        return res.json(token)
    }
}
export {AuthenticatedUserController}