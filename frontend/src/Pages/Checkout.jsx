// Checkout.js

import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_cart } from "../store/cartSlice";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

export const Checkout = () => {
  const ErrorAlert = (text) =>
    toast.error(text, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const user = useSelector((state) => state.userAuth.user);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const cartItems = useSelector((state) => state.userCart.cart);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    order: cartItems,
    total: getTotalPrice(),
    address: "",
  });

  useEffect(() => {
    if (!user.email) {
      ErrorAlert("Please Login");
      navigate("/login");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URI}/api/order/checkout`,
        formData,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(remove_cart());
        navigate("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkCart = () => {
    if (cartItems.length <= 0) {
      ErrorAlert("Your Cart is empty, Can't checkout");
      navigate("/");
    }
  };

  useEffect(() => {
    checkCart();
  }, []);

  return (
    <>
      <ToastContainer />
      <MyNavbar />
      <div className="container mt-4">
        <h2>Checkout</h2>

        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹ {item.price}</td>
                <td>{item.quantity}</td>
                <td>₹ {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Form>

        <div className="mt-3">
          <h4>Total Price: ₹ {getTotalPrice()}</h4>
        </div>
      </div>
    </>
  );
};
