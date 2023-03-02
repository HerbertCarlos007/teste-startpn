const clientRouter = require('express').Router()
import ClientsController from '../controllers/ClientsController'

clientRouter.post('/clients', ClientsController.store)
clientRouter.get('/clients', ClientsController.findAll)
clientRouter.get('/clients/:id', ClientsController.findOne)
clientRouter.put('/clients/:id', ClientsController.update)
clientRouter.delete('/clients/:id', ClientsController.delete)

export default clientRouter

