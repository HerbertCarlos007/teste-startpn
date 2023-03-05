const uploadImageRouter = require('express').Router()
import { Request, response, Response } from 'express'
import UploadImagesService from "../services/UploadImagesService"
import DeleteImagesService from "../services/DeleteImagesService"
import multer = require('multer')
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

uploadImageRouter.post('/', upload.single('image'), async (req: Request, res: Response) => {
    const { file } = req

    if (!file) {
        return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' })
    }

    const uploadImagesService = new UploadImagesService()
    await uploadImagesService.execute(file)

    return res.send()
})

uploadImageRouter.delete('/:filename', async(req: Request, res: Response) => {
    const { filename } = req.params



    const deleteImagesService = new DeleteImagesService()
    await deleteImagesService.execute(filename)

    return res.send()
})

export default uploadImageRouter

