import express from 'express'
import { registerController } from '../controllers/studentController.js'
import { register } from 'module'

let userRoute = express.Router()

userRoute.post('/register',registerController)


export default userRoute
