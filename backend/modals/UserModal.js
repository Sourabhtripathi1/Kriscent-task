import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const userModal=mongoose.model("user_table",userSchema)

export default userModal
