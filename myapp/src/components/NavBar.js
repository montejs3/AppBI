import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2020/05/SDG_website_banner_S_100px.png"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#prediction">Predicciones</Nav.Link>
                <Nav.Link href="#equipoTrabajo">Equipo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar;