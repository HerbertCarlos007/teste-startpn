import { Request, Response } from 'express'
import {Suppliers} from '../models/Supplier'

class SuppliersController {
    async store(req: Request, res: Response) {

        const { name, email, telephone, address, type } = req.body
        const clients = await Suppliers.create({
            name,
            email,
            telephone,
            address,
            type
        })
        return res.status(201).json(clients)
    }

    async findAll(req: Request, res: Response) {
        const suppliers = await Suppliers.findAll()
        return res.json({ suppliers })
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        const suppliers = await Suppliers.findOne({
            where: {
                id: id
            }
        })
        return suppliers ? res.status(200).json(suppliers) : res.status(204).send()
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        await Suppliers.update(req.body, {
            where: {
                id
            }
        })
        return res.status(200).json({message: 'Fornecedor atualizado com sucesso'})
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await Suppliers.destroy({
            where: {
                id
            }
        })
        return res.status(200).json({message: 'Fornecedor deletado com sucesso'})
    }
}

export default new SuppliersController()