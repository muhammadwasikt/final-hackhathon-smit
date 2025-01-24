import express from "express";
import { authRoutes } from "../auth/routes/authRoutes.js";



export const routes = express()



routes.use('/user',authRoutes)

