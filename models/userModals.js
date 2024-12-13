import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Date_birth:{
         type:String,
         required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
},{timestamps:true})

const userModal = new mongoose.model('userInfo',userSchema)

export default userModal