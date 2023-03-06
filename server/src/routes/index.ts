import { Router } from "express";
import userRoutes from "./userRoutes";
import outsiderRoutes from './outsidersRoutes'
import ImageRouter from "./ImagesRoutes";
import uploadImageRouter from "./ImagesRoutes";
import customFieldsRouter from "./customFieldsRoutes";

const router = require('express').Router()

router.use(userRoutes)
router.use(outsiderRoutes)
router.use(ImageRouter)
router.use(uploadImageRouter)
router.use(customFieldsRouter)


export default router