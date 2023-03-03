import { Router } from "express";
import userRoutes from "./userRoutes";
import outsiderRoutes from './outsidersRoutes'

const router = require('express').Router()

router.use(userRoutes)
router.use(outsiderRoutes)


export default router