import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import header from './../../assets/images/header-bg.png'

import { NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { allContext, } = useAuth();


    const { user, logOut } = allContext;
    const { displayName, email, uid } = user;
    return (
        <div className="sticky-top">
            <Navbar style={{ background: `url(${header})` }} expand="lg">
                <Container>
                    <Navbar.Brand className="text-white"
                        href="#home"><span className="title"> Victress Rose</span></Navbar.Brand>
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

                            <Nav.Link as={HashLink} to="/home#feature" className="text-white">
                                Feature Apartments
                            </Nav.Link>


                            {
                                !user.email ?
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
                            {/* hBagQWjYnKbfbWLkiE9B2tl6CU52 */}
                            {
                                uid === "hBagQWjYnKbfbWLkiE9B2tl6CU52" && (
                                    <Nav.Link as={HashLink} to="/admin" className="text-white">
                                        Admin
                                    </Nav.Link>
                                )
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;