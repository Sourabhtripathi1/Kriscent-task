import express from "express";
import cartModal from "../modals/CartModal.js";

const router = express.Router();

router.get("/list/:user", async (req, res) => {
  try {
    const user = req.params.user;

    const doc = await cartModal.findOne({ user: user });

    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(200).json({ user: "", cart: [] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({mmessage:"Internal server Error"});
  }
});

router.post("/update", async (req, res) => {
  try {
    const { user, cart } = req.body;

    const existingCart = await cartModal.findOne({ user: user });

    if (existingCart) {
      const updatedCart = await cartModal.updateOne(
        { user: user },
        { cart: cart }
      );

      res.status(200).json({ message: "Cart updated successfully" });
    } else {
      const newCart = new cartModal({
        user: user,
        cart: cart,
      });

      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
