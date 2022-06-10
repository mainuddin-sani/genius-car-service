import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const logoutHandler = ()=> {
    signOut(auth);
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="ms-auto d-flex mb-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user ? (
              <li>
                <Button variant="primary" onClick={logoutHandler} >
                  logout
                </Button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register" variant="primary">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" variant="primary">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
