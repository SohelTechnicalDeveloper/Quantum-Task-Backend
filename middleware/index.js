import express from 'express'
import userRouter from '../routes/userRoutes.js'

const router = express.Router()

router.use('/user',userRouter)

export default router