import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, FormControl, InputGroup, Modal, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useAuth from '../Hooks/useAuth';


const Signup = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    /* eta by jhankar
    const { user, registerUser, isLoading, authError } = useAuth();
    */
    /*  eta by coding club

    */
    const { allContext } = useAuth();
    const {
        user,
        registerUser,
        isLoading,
        authError
    } = allContext


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value)
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        alert('hello')
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="text-center my-4">
            {/* <button onClick={signInWithGoogle}>google login</button> */}
            <h2>Please Signup</h2>
            <p className=" mt-2">Login with Email & Password</p>

            <div className="w-25 mx-auto">
                {!isLoading &&
                    <Form onSubmit={handleLoginSubmit}

                    >
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        required
                                        name="name"
                                        onBlur={handleOnBlur}
                                        type="text"
                                        autoComplete="current-name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        name="email"
                                        onBlur={handleOnBlur}
                                        type="email"
                                        autoComplete="current-email"
                                        id="email"
                                        placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        name="password"
                                        onBlur={handleOnBlur}
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <button type="submit" className="btn btn-primary mt-2 w-100">
                            Signup
                        </button>
                    </Form>}
                {isLoading && <Spinner animation="border" variant="danger" />}
                {user?.email &&
                    <Modal.Dialog>
                        <Modal.Body>
                            <p>Registered successfully</p>
                        </Modal.Body>
                    </Modal.Dialog>
                }
                {authError &&
                    <Modal.Dialog>
                        <Modal.Body>
                            <p>Registered successfully</p>
                        </Modal.Body>
                    </Modal.Dialog>
                }
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please login!
                </NavLink>
            </p>
        </div>
    );
};

export default Signup;