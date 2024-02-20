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
          setOrders(res.data);
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
              <th>Order</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const originalDate = new Date("2024-02-20T10:49:26.135Z");

              // Convert to d-m-y format
              const formattedDate = originalDate.toLocaleDateString("en-GB"); // 'en-GB' corresponds to the format d-m-y

              return (
                <tr key={order.id}>
                  <td>
                    <div
                      className="d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      {order.order.map((item, index) => (
                        <div
                          key={index}
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div>{item.name}</div>
                          <div>X</div> <div>{item.quantity}</div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>{formattedDate}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    {order.total.toFixed(2)}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>{order.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
