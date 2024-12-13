import express from 'express'
import { getAllUser, loginUser, registerUser } from '../Controllers/userController.js'
import {authenticate} from '../middleware/jwtAuthenticate.js'
const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/getAllUser',authenticate,getAllUser)


export default userRouter

