import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

/* Navigation bar with five menu */
const NavigationBar = () => {
    return (

        <Navbar expand="lg" bg="dark" variant="dark">
            <Container >
                <Nav className="mx-auto">
                    <Navbar.Brand className="fw-bold ">Trading Spot</Navbar.Brand>
                    <Nav.Link> <NavLink className="menu" exact to="/home">Home</NavLink> </Nav.Link>
                    <Nav.Link> <NavLink className="menu" exact to="/about">About</NavLink> </Nav.Link>
                    <Nav.Link> <NavLink className="menu" exact to="/education">Education</NavLink> </Nav.Link>
                    <Nav.Link> <NavLink className="menu" exact to="/services">Services</NavLink> </Nav.Link>
                    <Nav.Link> <NavLink className="menu" exact to="/contact">Contact Us</NavLink> </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;