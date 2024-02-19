import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserCart } from "./Pages/UserCart";
import { Login } from "./Pages/Login";
import { Orders } from "./Pages/Orders";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Home } from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";

function App() {
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
