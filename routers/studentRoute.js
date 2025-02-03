import express from 'express'
import { createUser } from '../controllers/studentController.js'
let userRoute = express.Router()

userRoute.post('/register',createUser)


export default userRoute
