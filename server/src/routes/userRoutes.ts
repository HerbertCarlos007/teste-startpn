const userRouter = require('express').Router()
import UserController from '../controllers/userController'
import AuthController from '../controllers/AuthController'
import { AuthMiddleware } from '../middleware/auth'

userRouter.post('/register', UserController.store)
userRouter.post('/auth', AuthController.authenticate)
userRouter.get('/users', AuthMiddleware, UserController.findAllUser)
userRouter.post('/forgot-password', UserController.forgotPassword)


export default userRouter