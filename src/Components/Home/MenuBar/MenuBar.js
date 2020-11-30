import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.scss';
import navbarIcon from '../../../images/icon/Instant logo.png';


const Menubar = () => {

    return (
        <>
            <div className="navbar-bg">
                <div className="container">
                    <Navbar expand="lg">
                        <div className="logo">
                            <Link to="/home" className=""><h1 className="logo-text ml-3">PowerIT</h1></Link>
                        </div>
                        <Navbar.Toggle className="navbar-hamburger" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto mt-2">
                                <NavDropdown className="dropdown-btn mt-n2" title={
                                    <span className="dropdown-title">For You</span>
                                } id="basic-nav-dropdown">
                                    <div className="arrow-up"></div>
                                    <NavDropdown.Item className="first-item" href="#action/3.1">Find your solution</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Choose your design</NavDropdown.Item>
                                    <NavDropdown.Item className="last-item" href="#action/3.3">Go for it</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <Link className="menu-link mt-n1" to="/"><img src={navbarIcon} alt="" className="img-fluid" />Services</Link>
                                <Link className="menu-link" to="/">Pricing</Link>
                                <Link className="menu-link" to="/">About Us</Link>
                                <Link className="menu-link" to="/">Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default Menubar;