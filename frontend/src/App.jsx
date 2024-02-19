import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserCart } from "./Pages/UserCart";
import { Login } from "./Pages/Login";
import { Orders } from "./Pages/Orders";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  { setProducts } from "./store/productSlice";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Home } from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";


function App() {
  const dispatch = useDispatch();

  const backend = process.env.REACT_APP_BACKEND_URI;

  useEffect(()=>{

    const fetchData=async ()=>{
      await axios.get(`${backend}/api/products/getlist`).then((res)=>{
        dispatch(setProducts(res.data))
      }).catch((err)=>{
        console.log(err);
      })
    }

    fetchData()

  })

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/cart"} element={<UserCart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/orders"} element={<Orders />} />

          <Route path={"/*"} element={<>Error 404</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
