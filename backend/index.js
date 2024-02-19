import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


import authRoutes from "./Routes/authRoutes.js"
import productRoutes from "./Routes/productRoutes.js"

const app = express();
const port = 5000;


// console.log(process.env.REACT_APP_BACKEND_URI);

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb://Sourabh:%23Sourabh123@mongo.sourabhtripathi.online/kriscent?authSource=kriscent&authMechanism=SCRAM-SHA-1"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
// app.use("/api/order", productRoutes);
// app.use("/api/cart", productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
