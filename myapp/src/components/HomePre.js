import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

function HomePre() {
    return (
        <Container>
            <Row>
            <h1>Nuestro Objetivo</h1>
            <p>Con esta pagina buscamos ayudar a predicir con base a un texto, el tipo de ODS al que este pertence.
                 Nuestro modelo solo permite predecir entre tres tipos de ODS, el 6, 7 y 16</p>
            </Row>
            <Row>
                <Col>
                <img
                alt=""
                src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-06.jpg"
                width={300}
                />
                </Col>

                <Col>
                <img
                alt=""
                src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-07.jpg"
                width={300}
                />      
                </Col>

                <Col>
                <img
                alt=""
                src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-16.jpg"
                width={300}
                />      
                </Col>
            </Row>

        </Container>
      );
    }

export default HomePre;