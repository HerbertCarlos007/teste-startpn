import { Router } from "express";
import userRoutes from "./userRoutes";

const router = require('express').Router()

router.use(userRoutes)

export default router