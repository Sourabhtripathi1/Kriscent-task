import mongoose from "mongoose";

const orderSchema =new mongoose.Schema({
  user: String,
  order: [
    {
      prod_id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  address: String,
});

const orderModal =new mongoose.model("order_table", orderSchema);

export default orderModal;
