import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: String,
    email: String,
    order: [
      {
        prod_id: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
    address: String,
    status: { type: String, required: true, default: "Placed" },
  },
  { timestamps: true }
);

const orderModal = mongoose.model("order_table", orderSchema);

export default orderModal;
