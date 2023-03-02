import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { Request, Response } from 'express'
import { Users } from '../models/User'

class AuthController {

    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body
        const user = await Users.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return res.json({ error: "Usuário não encontrado" })
        }
        const isValuePassword = await compare(password, String(user.password))

        if (!isValuePassword) {
            return res.json({ error: "Senha invalida" })
        }

        const token = sign({ id: user.id }, String(process.env.SECRET), { expiresIn: '1d' })
        const { id } = user
        return res.status(200).json({ user: { id, email }, token })
    }
}

export default new AuthController