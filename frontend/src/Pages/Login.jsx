import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { login, signUp } from "../store/authSlice";
import MyNavbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const loginUser = async (data) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        email: data.email,
        pswd: data.pswd,
      });
      console.log({
        email: res.data.user.email,
        name: res.data.user.name,
      });

      dispatch(
        login({
          user: {
            email: res.data.user.email,
            name: res.data.user.name,
          },
          auth: res.data.auth,
        })
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signUpUser = async (data) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/register`, {
        name: data.name,
        email: data.email,
        pswd: data.pswd,
      });

      dispatch(
        signUp({
          user: {
            email: res.data.user.email,
            name: res.data.user.name,
          },
          auth: res.data.auth,
        })
      );

      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      loginUser({ email: formData.email, pswd: formData.password });
    } else {
      signUpUser({
        name: formData.name,
        email: formData.email,
        pswd: formData.password,
      });
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      {" "}
      <MyNavbar />
      <Card style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
          <Form onSubmit={handleSubmit}>
            {isLogin ? null : (
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
            )}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" className="w-100">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
          <div className="text-center mt-3">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <Button variant="link" onClick={toggleForm}>
                  Sign Up
                </Button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Button variant="link" onClick={toggleForm}>
                  Login
                </Button>
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
