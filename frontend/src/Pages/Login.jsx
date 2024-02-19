import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { login, signUp } from "../store/authSlice";
import MyNavbar from "../components/Navbar";
import { useDispatch } from "react-redux";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(login({ email: formData.email, pswd: formData.password }));
    } else {
      dispatch(
        signUp({
          name: formData.name,
          email: formData.email,
          pswd: formData.password,
        })
      );
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
