const outsiderRouter = require('express').Router()
import OutsidersController from '../controllers/OutsidersController'
import ImageRouter from './ImagesRoutes'

outsiderRouter.post('/outsiders', OutsidersController.store)
outsiderRouter.get('/outsiders', OutsidersController.findAll)
outsiderRouter.get('/outsiders/:id', OutsidersController.findOne)
outsiderRouter.put('/outsiders/:id', OutsidersController.update)
outsiderRouter.delete('/outsiders/:id', OutsidersController.delete)

export default outsiderRouter

