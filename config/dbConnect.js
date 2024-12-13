import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

function dbConnect() 
{
    mongoose.connect(process.env.MONGOURL)
    .then(()=> console.log('Database Connected success'))
    .catch((err)=>console.log('Databse connection failed',err))
    
}

export default dbConnect