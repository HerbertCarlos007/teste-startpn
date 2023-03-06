const outsiderRouter = require('express').Router()
import OutsidersController from '../controllers/OutsidersController'
import { AuthMiddleware } from '../middleware/auth'
import multer = require('multer')
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

outsiderRouter.post('/outsiders', AuthMiddleware, upload.single('file'), OutsidersController.store)
outsiderRouter.get('/outsiders', AuthMiddleware, OutsidersController.findAll)
outsiderRouter.get('/outsiders/:id', AuthMiddleware, OutsidersController.findOne)
outsiderRouter.put('/outsiders/:id', AuthMiddleware, OutsidersController.update)
outsiderRouter.delete('/outsiders/:id', AuthMiddleware, OutsidersController.delete)

export default outsiderRouter

