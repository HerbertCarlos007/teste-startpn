import { Request, Response } from 'express'
import { Users } from '../models/User'
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import {encryptPassword } from '../utils/encryptPassword'

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

     const hashPassword = await encryptPassword(password)
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
        const { email, } = req.body

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

            transporter.sendMail({
                from: 'Administrador <c1331cf0bc-5132b9+1@inbox.mailtrap.io>',
                to: email,
                subject: 'Senha atualizada!',
                html: `<p>Clique no link para alterar sua senha</p><br/><a href="http://127.0.0.1:5173/newPassword/${user.id}">Sistema</a>`
            }).then(() => {
                res.status(200).json({ message: 'Email enviado com sucesso' })
            }).catch((error) => {
                console.log(error)
                res.status(500).json({ error: 'Erro ao enviar email de confirmação' })
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao atualizar senha' })
        }
    }

    async recoverPassword(req: Request, res: Response) {
        const {id} = req.params

        const oldUser = await Users
    //    const password = await encryptPassword(req.body.password)

       
         
    }
}

export default new UserController()


