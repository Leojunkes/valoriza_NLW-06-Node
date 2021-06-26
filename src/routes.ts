import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { onlyAdmin } from './middlewares/onlyAdmin'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticatedUserController } from './controllers/AuthenticateUserController'
const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticatedUserController = new AuthenticatedUserController()


router.post('/users', createUserController.handle)
router.post('/tags', createTagController.handle)
router.post('/login', authenticatedUserController.handle)

export { router }