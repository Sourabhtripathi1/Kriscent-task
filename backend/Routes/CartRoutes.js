import express from "express";
import cartModal from "../modals/CartModal.js";

const router = express.Router();

router.post("/list/:user", async (req, res) => {
  try {
    const user = req.params.user;

    const doc = cartModal.find({ user: user });
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
});

router.post("/update", async (req, res) => {
  try {
    const { user, cart } = req.body;

    let doc = cartModal.updateOne({ user: user }, { cart: cart });
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
});

export default router;
