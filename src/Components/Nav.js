import React from "react";
import Container from "react-bootstrap/Container";
import NavMain from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink  } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={"/Images/logo.jpg"}
              alt="Logo"
              height="70"
              width="60"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavMain className="me-auto w-100 justify-content-center">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
              <NavLink to="/members" className="nav-link">
                Members
              </NavLink>
              <NavLink to="/image" className="nav-link">
                Images
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </NavMain>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
