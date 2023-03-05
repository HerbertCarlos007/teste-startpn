import { Request, Response } from 'express'
import { Outsiders } from '../models/Outsiders'
import UploadImagesService from '../services/UploadImagesService'
class OutsidersController {
    async store(req: Request, res: Response) {
        const { file } = req
        const { outsiderData } = req.body
        const parsedOutsiderData = JSON.parse(outsiderData)
        if (!file) {
            return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' })
        }
        const uploadImagesService = new UploadImagesService()
        await uploadImagesService.execute(file)
        const outsiders = await Outsiders.create({
        avatar: `https://teste-startpn.s3.amazonaws.com/${file.filename}`,
        ...parsedOutsiderData
        })
        return res.status(201).json(outsiders)
    }

    async findAll(req: Request, res: Response) {
        let where = {}
        if (req.query.typeOutsider) {
            const typeOutsider = String(req.query.typeOutsider)
            where = { typeOutsider }
        }
        try {
            const outsiders = await Outsiders.findAll({
                where
            });

            return res.json({ outsiders });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        const outsiders = await Outsiders.findOne({
            where: {
                id: id
            }
        })
        return outsiders ? res.status(200).json(outsiders) : res.status(204).send()
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        await Outsiders.update(req.body, {
            where: {
                id
            }
        })
        return res.status(200).json({ message: 'Cliente atualizado com sucesso' })
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await Outsiders.destroy({
            where: {
                id
            }
        })
        return res.status(200).json({ message: 'Cliente deletado com sucesso' })
    }
}

export default new OutsidersController()