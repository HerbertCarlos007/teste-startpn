import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { Users } from '../models/User'
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

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

    async forgotPassword(req: Request, res: Response) {
        const { email } = req.body

        try {
            const user = await Users.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }

            const transporter = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "f40a061ec33737",
                    pass: "282d65adbc6962"
                }
            })

            const newPassword = crypto.randomBytes(4).toString('hex')

            transporter.sendMail({
                from: 'Administrador <c1331cf0bc-5132b9+1@inbox.mailtrap.io>',
                to: email,
                subject: 'Recuperação de senha!',
                html: `<p>Olá, sua nova senha para acessar o sistema é ${newPassword}</p><br/><a href="http://localhost:3000/login>Sistema</a>`
            }).then(() => {

                bcrypt.hash(newPassword, 8).then(
                    password => {
                        user.update({
                            password
                        })
                    }
                )
                res.status(200).json({ message: 'Nova senha enviada para o email cadastrado' })
            }).catch((error) => {
                console.log(error)
                res.status(500).json({ error: 'Erro ao enviar email de recuperação de senha' })
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao recuperar usuário' })
        }
    }
}

export default new UserController()
