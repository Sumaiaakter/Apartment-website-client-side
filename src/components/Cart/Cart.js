import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from '../../Hooks/useAuth';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Cart = () => {
    const { selectedApartment, remove, setSelectedApartment, allContext } = useAuth();
    const history = useHistory();
    const { user } = allContext;
    const { uid } = user;

    const totalPrice = selectedApartment.reduce((total, apartment) => total + apartment.price, 0);

    return (
        <div className="my-4">
            <Container>
                <h2 className="text-center">Cart Number: {selectedApartment.length}</h2>
                {selectedApartment.length ?
                    <Row>
                        <Col md={8}>
                            {
                                selectedApartment.map((apartment) => {
                                    const { img, _id, title, desc, rating, ratingCount, price } = apartment;

                                    return (
                                        <Row className="my-2 bg-info" key={_id}>
                                            <Col sm={5}>
                                                <img className="img-fluid" src={img} alt="" />
                                            </Col>
                                            <Col sm={7}>
                                                <h5>{title}</h5>
                                                <p>{desc}</p>
                                                <h4>{price}</h4>
                                                <Row>
                                                    <Col md={5}>
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
                                                    </Col>
                                                    <Col md={7}>
                                                        <div className="d-flex my-2">
                                                            <NavLink to={`/apartments/${_id}`} className="btn btn-primary w-100 me-1">View Details</NavLink>

                                                            <button onClick={() => remove(_id)} className="btn btn-primary w-100 me-1">Remove</button>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Col>
                        <Col className="text-center" md={4}>
                            <h4>Total {selectedApartment.length} Order Selected</h4>
                            <h6>Total Price: {totalPrice}</h6>

                            <button
                                onClick={() => {
                                    fetch(`http://localhost:5000/purchase/${uid}`, {
                                        method: 'DELETE',
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.deletedCount > 0) {
                                                alert('Thanks for Purchasing');

                                                setSelectedApartment([])
                                                history.push('/home')
                                            }
                                        })


                                }}
                                className="btn btn-primary">Check Out</button>
                        </Col>
                    </Row> : <div className="text-center">
                        <h1>No Apartment Selected</h1>
                    </div>}
            </Container>
        </div>
    );
};

export default Cart;