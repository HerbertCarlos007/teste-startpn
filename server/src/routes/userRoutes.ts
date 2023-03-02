import UserController from '../controllers/userController'
import AuthController from '../controllers/AuthController'
import { AuthMiddleware } from '../middleware/auth'

const userRouter = require('express').Router()

userRouter.post('/register', UserController.store)
userRouter.post('/auth', AuthController.authenticate)
userRouter.get('/users', AuthMiddleware, UserController.findAllUser)

export default userRouter