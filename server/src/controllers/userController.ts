import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { Users } from '../models/User'

class UserController {

    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const userExists = await Users.findOne({
            where: {
                email
            }
        })

        if (userExists) {
            return res.json({ error: 'Usuário já existe' })
        }

        const hashPassword = await hash(password, 8)
        const user = await Users.create({
            name,
            email,
            password: hashPassword,
        })
        return res.status(200).json(user)
    }

    async findAllUser(req: Request, res: Response) {
        const users = await Users.findAll()
        return res.json({ users })
    }
}

export default new UserController()