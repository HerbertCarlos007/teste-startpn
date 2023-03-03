import { Request, Response } from 'express'
import { CustomFields } from '../models/CustomFields'

class CustomFieldsController {
    async store(req: Request, res: Response) {

        const { name, description } = req.body
        const customFields = await CustomFields.create({
            name,
            description
        })
        return res.status(201).json(customFields)
    }

    async findAll(req: Request, res: Response) {
        const customFields = await CustomFields.findAll()

        return res.status(201).json({ customFields })
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        await CustomFields.update(req.body, {
            where: {
                id
            }
        })
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        await CustomFields.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({ message: 'Campo deletado com sucesso' })
    }

}

export default new CustomFieldsController()