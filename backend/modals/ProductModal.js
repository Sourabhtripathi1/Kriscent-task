import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    image:String
})


const productModal=  mongoose.model("product_table",productSchema)


export default productModal

