const userRouter = require('express').Router()
import UserController from '../controllers/userController'
import AuthController from '../controllers/AuthController'
import { AuthMiddleware } from '../middleware/auth'
import multer = require('multer')
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

userRouter.post('/register', upload.single('file'), UserController.store)
userRouter.post('/auth', AuthController.authenticate)
userRouter.get('/users/:id', AuthMiddleware, UserController.find)
userRouter.post('/forgot-password', UserController.forgotPassword)
userRouter.put('/recover-password/:id', UserController.recoverPassword)

export default userRouter