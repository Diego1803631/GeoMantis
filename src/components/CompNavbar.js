import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const CompNavbar = (props) => {
    return (
        <Navbar id="Navbar">
            <Container>
                <Navbar.Brand href="#1">App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#1">Inicio</Nav.Link>
                        <Nav.Link href="#2">Servicios</Nav.Link>
                        <Nav.Link href="#3">Nosotros</Nav.Link>
                        <Nav.Link href="#4">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CompNavbar;