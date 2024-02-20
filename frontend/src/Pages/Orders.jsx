import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Orders = () => {
  const backend = process.env.REACT_APP_BACKEND_URI;

  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => state.userAuth.user);
  const navigate = useNavigate();

  const dummyOrders = [
    { id: 1, date: "2022-01-01", total: 50.0 },
    { id: 2, date: "2022-02-15", total: 75.5 },
    // Add more orders as needed
  ];

  useEffect(() => {
    // You can fetch orders from an API here
    // For now, using dummyOrders
    setOrders(dummyOrders);
  }, []);

  useEffect(() => {
    if (!user.email) {
      alert("Please Login");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${backend}/api/order/get/${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetch();
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <h1>My Orders</h1>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
