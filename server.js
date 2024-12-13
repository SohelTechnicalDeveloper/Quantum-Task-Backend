import express from 'express'
import dotenv from 'dotenv'
import router from './middleware/index.js'
import cors from 'cors'
import dbConnect from './config/dbConnect.js'

dotenv.config()
const app = express()
const port = 4000|| process.env.PORT

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors())
dbConnect()



app.use(router)


app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
    
}) 