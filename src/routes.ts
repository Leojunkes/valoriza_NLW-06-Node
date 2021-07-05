import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'

import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticatedUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticate';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ensureAdmin } from './middlewares/onlyAdmin';
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserController } from './controllers/ListUsersController'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticatedUserController = new AuthenticatedUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendController = new ListUserSendComplimentsController()
const listUserReceiveController = new ListUserReceiveComplimentsController()

const listTagsController = new ListTagsController()
const listUsersController = new ListUserController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/login', authenticatedUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSendController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)

router.get("/users", ensureAuthenticated,listUsersController.handle)

export { router }