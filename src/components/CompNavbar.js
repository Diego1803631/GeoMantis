import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const CompNavbar = (props) => {
    return (
        <Navbar id="Navbar" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#Inicio">Logo Empresarial</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CompNavbar;