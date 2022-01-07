import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Mynavbar.css";

function Mynavbar() {
  return (
    <Navbar className="navbar" bg="dark" expand="lg" variant="dark">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://image.flaticon.com/icons/png/512/831/831292.png"
            width="60"
            height="60"
            className="d-inline-block align-top brand-logo"
          />
          {""}
          <h1 className="brand-text">Pain Care</h1>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse collapseOnSelect>
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link href="" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="" className="nav-link">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="" className="nav-link">
              SERVICES
            </Nav.Link>
            <Nav.Link href="" className="nav-link">
              GALLERY
            </Nav.Link>
            <Nav.Link href="" className="nav-link">
              ARTICLES
            </Nav.Link>
            <Nav.Link href="" className="nav-link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
