import { Request, Response } from 'express'
import { Clients } from '../models/Clients'

class ClientsController {
    async store(req: Request, res: Response) {

        const { name, email, telephone, address, type } = req.body
        const clients = await Clients.create({
            name,
            email,
            telephone,
            address,
            type
        })
        return res.status(201).json(clients)
    }

    async findAll(req: Request, res: Response) {
        const clients = await Clients.findAll()
        return res.json({ clients })
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        const client = await Clients.findOne({
            where: {
                id: id
            }
        })
        return client ? res.status(200).json(client) : res.status(204).send()
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        await Clients.update(req.body, {
            where: {
                id
            }
        })
        return res.status(200).json({message: 'Usuário atualizado com sucesso'})
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await Clients.destroy({
            where: {
                id
            }
        })
        return res.status(200).json({message: 'Usuário deletado com sucesso'})
    }
}

export default new ClientsController()