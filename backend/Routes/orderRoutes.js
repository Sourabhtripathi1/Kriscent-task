import express from "express";
import orderModal from "../modals/OrdersModal.js";

const router = express.Router();

router.get("/get/:user", async (req, res) => {
  try {
    const user = req.params.user;
    const doc = await orderModal.find({ email: user });

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({message:"Internal server Error"});
  }
});

router.post("/checkout", async (req, res) => {
  try {
    const {name, email, order,total, address } = req.body;

    let doc = new orderModal();

    doc.user = name;
    doc.email = email;
    doc.total = total;
    doc.order = order;
    doc.address = address;

    doc = await doc.save();

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({message:"Internal server Error"});
  }
});

export default router;
