import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: String,
    cart: [
      {
        product_id: String,
        product_name: String,
        quantity: Number,
        price: Number,
      },
    ],
  },
  { timestamps: true }
);

const cartModal = mongoose.model("cart_table", cartSchema);

export default cartModal;
