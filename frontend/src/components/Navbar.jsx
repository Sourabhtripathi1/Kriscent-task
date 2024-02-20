import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useEffect } from "react";

const MyNavbar = () => {
  const user = useSelector((state) => state.userAuth.user);

  const dispatch = useDispatch();


  return (
    <Navbar className="p-3" bg="dark" variant="dark" expand="lg" >
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link>
            <Link to="/" style={{textDecoration:"none",fontWeight:"600", color:"#ffffff8c"}}>Home </Link>
          </Nav.Link>

          {user?.email ? (
            <>
              <Nav.Link>
                <Link to="/cart" style={{textDecoration:"none",fontWeight:"600", color:"#ffffff8c"}}>Cart </Link>
              </Nav.Link>

              <Nav.Link>
                <div>
                  <Link to="/orders" style={{textDecoration:"none",fontWeight:"600", color:"#ffffff8c"}}>Orders </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div onClick={() => dispatch(logout())}>Logout</div>
              </Nav.Link>
            </>
          ) : (
            <Nav.Link>
              <Link to="/login" style={{textDecoration:"none",fontWeight:"600", color:"#ffffff8c"}}>Login </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
