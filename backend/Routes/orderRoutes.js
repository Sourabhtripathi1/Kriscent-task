import express from "express";
import orderModal from "../modals/OrdersModal";

const router = express.Router();

router.get("/get/:user", async (req, res) => {
  try {

    const user=req.params.user

    const doc = await orderModal.find({user:user});

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json("Internal server Error");
  }
});

router.post("/checkout", async (req, res) => {
  try {
    const { user, cart, address } = req.body;

    let doc = new orderModal();

    doc.user = user;
    doc.order = cart;
    doc.address = address;

    doc = await doc.save();

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json("Internal server Error");
  }
});

export default router;
