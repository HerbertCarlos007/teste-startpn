import { Router } from "express";
import userRoutes from "./userRoutes";
import outsiderRoutes from './outsidersRoutes'
import customFieldsRouter from "./customFieldsRoutes";
import uploadImageRouter from "./uploadImagesRoutes";

const router = require('express').Router()

router.use(userRoutes)
router.use(outsiderRoutes)
router.use(customFieldsRouter)
router.use(uploadImageRouter)


export default router