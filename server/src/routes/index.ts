import { Router } from "express";
import userRoutes from "./userRoutes";
import outsiderRoutes from './outsidersRoutes'
import customFieldsRouter from "./customFieldsRoutes";

const router = require('express').Router()

router.use(userRoutes)
router.use(outsiderRoutes)
router.use(customFieldsRouter)


export default router