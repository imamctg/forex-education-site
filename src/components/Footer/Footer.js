import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

/* This is Footer component to create Footer part */
const Footer = () => {
    return (

        <Navbar expand="lg" bg="dark" className="footer">
            <Container>
                <Navbar expand="lg" className="text-white">
                    <ul className="text-white">
                        <li>Forex Trading Education</li>
                        <li>Technical Analysis</li>
                        <li>Fundamental Analysis</li>
                        <li>Money Management</li>
                        <li>Risk Management</li>
                    </ul>

                    <ul className="ms-5 text-left">
                        <li>Scalping Technique</li>
                        <li>Long Time Trading</li>
                        <li>Price Action</li>
                        <li>Chart Analysis</li>
                        <li>Profit gain daily</li>
                    </ul>
                    <ul className="ms-5 text-left">
                        <li><NavLink className="menu" exact to="/home">Home</NavLink></li>
                        <li><NavLink className="menu" exact to="/about">About</NavLink></li>
                        <li><NavLink className="menu" exact to="/education">Education</NavLink></li>
                        <li><NavLink className="menu" exact to="/services">Services</NavLink></li>
                        <li><NavLink className="menu" exact to="/contact">Contact Us</NavLink></li>
                    </ul>
                    <ul className="ms-5 text-left">
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-twitter-square"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin"></i></li>
                        <li><i class="fab fa-stumbleupon-circle"></i></li>
                    </ul>
                    <p className="ms-5 mt-5">@ <small>All Rights Reserve</small></p>
                </Navbar>


            </Container>

        </Navbar>


    );
};

export default Footer;