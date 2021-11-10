import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import header from './../../assets/images/header-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    // const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div className="">
            <Navbar style={{ background: `url(${header})` }} expand="lg">
                <Container>
                    <Navbar.Brand className="text-white"
                        href="#home">Victress Rose</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-white">
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="text-white">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/apartments" className="text-white">
                                Apartments
                            </Nav.Link>

                            <Nav.Link to="/home#feature" className="text-white">
                                Feature Apartments
                            </Nav.Link>

                            {
                                !user.displayName ?
                                    (
                                        <>
                                            <Nav.Link as={NavLink} to="/signup" className="text-white">
                                                Sign Up
                                            </Nav.Link>

                                            <Nav.Link as={NavLink} to="/login" className="text-white">
                                                Login
                                            </Nav.Link>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link as={NavLink} to="/dashboard" className="text-white">
                                                Dashboard
                                            </Nav.Link>

                                            <NavDropdown
                                                title={
                                                    <img
                                                        style={{
                                                            width: "45px",
                                                            borderRadius: "50%",
                                                        }}
                                                        src={photoURL}
                                                        alt=""
                                                    />
                                                }
                                            >
                                                <div className="text-center">
                                                    <h6>{displayName}</h6>
                                                    <p className="m-0 mb-2">{email}</p>
                                                    <button onClick={logOut} className="btn btn-primary">
                                                        Sign Out
                                                    </button>
                                                </div>
                                            </NavDropdown>
                                        </>
                                    )

                            }
                            {/* pore kete dibo */}
                            <Nav.Link to="/apartments" className="text-white">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <Badge style={{ background: "orange" }}>0</Badge>
                            </Nav.Link>
                            {/*------ end -------*/}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;