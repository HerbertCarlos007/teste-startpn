const customFieldsRouter = require('express').Router()
import CustomController from '../controllers/CustomFields'

customFieldsRouter.post('/custom-fields', CustomController.store)
customFieldsRouter.get('/custom-fields', CustomController.findAll)
customFieldsRouter.delete('/custom-fields/:id', CustomController.delete)

export default customFieldsRouter