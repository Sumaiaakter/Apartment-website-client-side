import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import google from "./../../assets/images/google.png";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, FormControl, InputGroup, Modal, Row, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    /* eta by jhankar
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
     */
    // eta by coding club---------->
    const { allContext } = useAuth();
    const {
        user,
        loginUser,
        signInWithGoogle,
        isLoading,
        authError
    } = allContext

    // send user expected page
    const location = useLocation();
    const redirect = location?.state?.from;

    const history = useHistory();



    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    // handle google sign in------------------->

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="text-center my-4">

            <h2>Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>

            <div className="w-25 mx-auto">
                <Form onSubmit={handleLoginSubmit}

                >

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
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    name="email"
                                    onChange={handleOnChange}
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
                                    onChange={handleOnChange}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>

                    <p className="mt-2">
                        <NavLink className="text-decoration-none" to="/signup">
                            Need an Account? Please Sign up!
                        </NavLink>
                        <br />
                        <NavLink className="text-decoration-none" to="/reset">
                            Forget password? Reset!
                        </NavLink>
                    </p>
                    {isLoading && <Spinner animation="border" variant="danger" />}
                    {user?.email &&
                        <Modal.Dialog>
                            <Modal.Body>
                                <p>Login successfully</p>
                            </Modal.Body>
                        </Modal.Dialog>
                    }

                    {authError && <Modal.Dialog>
                        <Modal.Body>
                            <p>This is an error alert</p>
                        </Modal.Body>
                    </Modal.Dialog>}
                </Form>


            </div>

            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn"
                >
                    <img height="40px" src={google} width="80px" alt="google-icon" />
                </button>

            </div>
        </div>
    );
};

export default Login;