import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/tranzo_nav.css';

const TranzoNavbar = () => {
    return (
        <Navbar className='nav_bar' expand="lg">
            <Container>
                <Navbar.Brand href="/">Tranzo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='d-flex'>
                    <Nav className="ml-auto">
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TranzoNavbar;