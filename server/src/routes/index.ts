import { Router } from "express";
import userRoutes from "./userRoutes";
import clientRoutes from './clientsRoutes'

const router = require('express').Router()

router.use(userRoutes)
router.use(clientRoutes)

export default router