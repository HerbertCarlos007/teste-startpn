const supplierRouter = require('express').Router()
import SupplierController from '../controllers/SupplierController'

supplierRouter.post('/suppliers', SupplierController.store)
supplierRouter.get('/suppliers', SupplierController.findAll)
supplierRouter.get('/suppliers/:id', SupplierController.findOne)
supplierRouter.put('/suppliers/:id', SupplierController.update)
supplierRouter.delete('/suppliers/:id', SupplierController.delete)

export default supplierRouter

