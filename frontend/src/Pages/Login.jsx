import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { login, signUp } from "../store/authSlice";
import MyNavbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const backend = process.env.REACT_APP_BACKEND_URI;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

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

  const SuccessAlert = (text) =>
    toast.success(text, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const loginUser = async (data) => {
    try {
      const res = await axios.post(
        `${backend}/api/auth/login`,
        {
          email: data.email,
          pswd: data.pswd,
        },
        { withCredentials: true }
      );
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
        })
      );

      SuccessAlert("Login Success")

      navigate("/");
    } catch (err) {  ErrorAlert(err?.response?.data?.message)
    }
  };

  const signUpUser = async (data) => {
    try {
      const res = await axios.post(
        `${backend}/api/auth/register`,
        {
          name: data.name,
          email: data.email,
          pswd: data.pswd,
        },
        { withCredentials: true }
      );

      dispatch(
        signUp({
          user: {
            email: res.data.user.email,
            name: res.data.user.name,
          },
        })
      );

      SuccessAlert("Register Success")
      navigate("/");
    } catch (err) {
      console.log(err);
       ErrorAlert(err?.response?.data?.message)
    }
  };

  const provider = new GoogleAuthProvider();
  const signinwthgoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user.providerData[0];

        await axios
          .post(
            `${backend}/api/auth/register/google`,
            {
              name: user.displayName,
              email: user.email,
              pswd: user.uid,
            },
            { withCredentials: true }
          )
          .then((res) => {
            dispatch(
              signUp({
                user: {
                  email: res.data.user.email,
                  name: res.data.user.name,
                },
              })
            );

            SuccessAlert("Login Success")
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
             ErrorAlert(err?.response?.data?.message)
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
      });
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
      <ToastContainer />
      <MyNavbar />
      <Card style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
          <Form onSubmit={handleSubmit}>
            {isLogin ? null : (
              <Form.Group controlId="name" className="pt-3">
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
            <Form.Group controlId="email"  className="pt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password"  className="pt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" className="w-100 mt-4">
              {isLogin ? "Login" : "Sign Up"}
            </Button>

<div className="d-flex p-4 justify-content-center">or</div>

<div className="d-flex  justify-content-center ">       <Button className="w-100" style={{backgroundColor:"#f7810d", border:"0"}} onClick={signinwthgoogle}>Continue with Google</Button>
     </div>

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
        </Card.Body>{" "}
       
      </Card>
    
    </>
  );
}
