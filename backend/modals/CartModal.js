import mongoose from "mongoose";


const cartSchema=new mongoose.Schema({
    user:String,
    product_id:String,
    product_name:String,
    quantity:Number,
    price:Number
})



const cartModal=new mongoose.Model("cart_table",cartSchema)

export default cartModal