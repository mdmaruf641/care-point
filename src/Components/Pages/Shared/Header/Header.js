import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../../images/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <Navbar id="home" collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img class="w-100" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="nav-items" as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} className="nav-items" href="#service">
                Services
              </Nav.Link>
              <Nav.Link className="nav-items" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-items" href="#gallery">
                Gallery
              </Nav.Link>
              <Nav.Link className="nav-items" href="#team">
                Team
              </Nav.Link>
              <Nav.Link className="nav-items" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="nav-items text-dark" href="#login">
                Login
              </Nav.Link>
              <Nav.Link className="nav-items signUp text-white" href="#signUp">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
