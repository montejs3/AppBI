import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col, Card } from "react-bootstrap";

function HomePre() {
    return (
        <Container>
            <Row>
            <h1>Nuestro Objetivo</h1>
            <p>Con esta pagina buscamos ayudar a predicir con base a un texto, el tipo de ODS al que este pertence.
                 Nuestro modelo solo permite predecir entre tres tipos de ODS. A continuación detallamos cada uno de estos</p>
            </Row>
            <Row>
                <Col >
                <Card>
                <Card.Img variant="top" src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-06.jpg" class="img-fluid" />
                <Card.Body>
                <Card.Text>
                Si bien se ha conseguido progresar de manera sustancial a la hora de ampliar el acceso a agua potable y saneamiento, existen miles de millones de personas (principalmente en áreas rurales) que aún carecen de estos servicios básicos. En todo el mundo, una de cada tres personas no tiene acceso a agua potable salubre, dos de cada cinco personas no disponen de una instalación básica destinada a lavarse las manos con agua y jabón, y más de 673 millones de personas aún defecan al aire libre.
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card>
                <Card.Img variant="top" src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-07.jpg" class="img-fluid" />
                <Card.Body>
                <Card.Text>
                El mundo está avanzando hacia la consecución del Objetivo 7 con indicios alentadores de que la energía se está volviendo más sostenible y ampliamente disponible. El acceso a la electricidad en los países más pobres ha comenzado a acelerarse, la eficiencia energética continúa mejorando y la energía renovable está logrando resultados excelentes en el sector eléctrico.
                </Card.Text>
                </Card.Body>
                </Card> 
                </Col>

                <Col>
                <Card>
                <Card.Img variant="top" src="http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-16.jpg" class="img-fluid" />
                <Card.Body>
                <Card.Text>
                Los conflictos, la inseguridad, las instituciones débiles y el acceso limitado a la justicia continúan suponiendo una grave amenaza para el desarrollo sostenible.

El número de personas que huyen de las guerras, las persecuciones y los conflictos superó los 70 millones en 2018, la cifra más alta registrada por la Oficina del Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR) en casi 70 años.
                </Card.Text>
                </Card.Body>
                </Card>  
                </Col>
            </Row>

        </Container>
      );
    }

export default HomePre;