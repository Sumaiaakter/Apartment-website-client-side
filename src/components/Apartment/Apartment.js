import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import './Apartment.css'
import useAuth from '../../Hooks/useAuth';

const Apartment = ({ apartment }) => {
    const history = useHistory()
    const { _id, img, title, desc, price, rating, ratingCount } = apartment;
    const { addToCart, allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;

    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="m-2" style={{ width: '21rem' }}>
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body className="my-1 py-1">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>

                <Card.Body className="my-1 py-1">
                    <h4>Price: ${price}</h4>
                </Card.Body>
                <Card.Body className="my-1 py-1">
                    <Row>
                        <Col>
                            <Rating

                                initialRating={rating}
                                readonly
                                fullSymbol={<FontAwesomeIcon className="text-warning"
                                    icon={fullStar} />}
                                emptySymbol={<FontAwesomeIcon className="text-warning"
                                    icon={emptyStar} />}

                            />
                            <span className="ms-2">{rating}</span>
                        </Col>
                        <Col>Total Rating: {ratingCount}</Col>
                    </Row>
                </Card.Body>
                <Card.Body className="d-flex">
                    <NavLink to={`/apartments/${_id}`} className="btn btn-primary w-100 me-1">View Details</NavLink>

                    <button onClick={() => {
                        if (uid) {
                            addToCart(apartment)
                        }
                        else {
                            history.push('/login')
                        }

                    }} className="btn btn-primary w-100 me-1">Add to Cart</button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Apartment;