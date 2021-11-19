import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
    const { allContext } = useAuth();
    const { user } = allContext;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <h1 className="text-center">profile</h1>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <div className="align-items-center d-flex flex-column">
                            <img className="rounded-circle" src={photoURL} alt="" />

                            <button className="btn btn-primary text-center my-2">Update Profile</button>
                        </div>

                    </Col>
                    <Col md={6}>
                        <h6>Full Name</h6>
                        <h4>{displayName}</h4>
                        <h6>Email</h6>
                        <h4>{email}</h4>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Profile;