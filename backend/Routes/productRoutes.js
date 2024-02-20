import express from "express";
import productModal from "../modals/ProductModal.js";

const router = express.Router();

router.get("/getlist", async (req, res) => {
  try {
    const doc = await productModal.find({});

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({message:"Internal server Error"});
  }
});

export default router;
