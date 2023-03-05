import { Router } from "express";
import userRoutes from "./userRoutes";
import outsiderRoutes from './outsidersRoutes'
import ImageRouter from "./ImagesRoutes";
import uploadImageRouter from "./ImagesRoutes";

const router = require('express').Router()

router.use(userRoutes)
router.use(outsiderRoutes)
router.use(ImageRouter)
router.use(uploadImageRouter)


export default router