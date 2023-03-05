const outsiderRouter = require('express').Router()
import OutsidersController from '../controllers/OutsidersController'
import multer = require('multer')
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

outsiderRouter.post('/outsiders', upload.single('file'), OutsidersController.store)
outsiderRouter.get('/outsiders', OutsidersController.findAll)
outsiderRouter.get('/outsiders/:id', OutsidersController.findOne)
outsiderRouter.put('/outsiders/:id', OutsidersController.update)
outsiderRouter.delete('/outsiders/:id', OutsidersController.delete)

export default outsiderRouter

