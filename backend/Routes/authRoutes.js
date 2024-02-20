//authroutes.js
import express from "express";
import userModal from "../modals/UserModal.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const secret = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  try {
    //  res.status(200).json("hello");

    const { name, email, pswd } = req.body;

    const dat = await userModal.find({ email: email });

    if (dat.length > 0) {
      res.status(500).json("Email Already Exists");
    } else {
      let doc = new userModal();

      doc.name = name;
      doc.email = email;
      doc.password = pswd;

      doc = await doc.save();

      console.log(doc);

      req.session.User = doc;

      res.status(200).json({ user: doc });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    // res.status(200).json("hello2");

    const { email, pswd } = req.body;

    let doc = await userModal.findOne({ email: email, password: pswd });

    if (doc) {
      req.session.User = doc;
      res.status(200).json({ user: doc });
    } else {
      res.status(500).json("Invalid Credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json("logout");
    }
  });
});

export default router;
