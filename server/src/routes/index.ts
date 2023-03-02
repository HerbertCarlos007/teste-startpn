import { Router } from "express";
import userRoutes from "./userRoutes";
import clientRoutes from './clientsRoutes'
import supplier from './suppliersRoutes'

const router = require('express').Router()

router.use(userRoutes)
router.use(clientRoutes)
router.use(supplier)

export default router