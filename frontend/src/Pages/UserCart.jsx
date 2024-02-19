import React, { useState } from "react";
import MyNavbar from "../components/Navbar";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { remove_from_cart } from "../store/cartSlice";

export const UserCart = () => {
  const cartItems = useSelector((state) => state.userCart.cart);

  const dispatch = useDispatch();

  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: "Product 1", price: 20, quantity: 2 },
  //   { id: 2, name: "Product 2", price: 30, quantity: 1 },
  //   // Add more items as needed
  // ]);

  const getTotalPrice = () => {
    let total = 0;
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(remove_from_cart(item.id))}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-right">
          <h4>Total Price: ${getTotalPrice()}</h4>
          <Link to="/checkout">
            <Button variant="primary">Checkout</Button>
          </Link>
        </div>
      </div>
    </>
  );
};