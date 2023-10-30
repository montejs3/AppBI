import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll'; // Import Link from react-scroll

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand >
          <img
            alt=""
            src="https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2020/05/SDG_website_banner_S_100px.png"
            className="d-inline-block align-top img-fluid" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="Home" spy={true} >
              <Nav.Link>Home</Nav.Link>
            </Link>

         
        
            <Link to="predictions" spy={true} >
              <Nav.Link>Predicciones</Nav.Link>
            </Link>

            <Link to="Equipo" spy={true} >
              <Nav.Link>Equipo</Nav.Link>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;