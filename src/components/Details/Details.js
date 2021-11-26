import Rating from 'react-rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Details = () => {
    const [apartment, setApartment] = useState({});
    const { id } = useParams();
    const { addToCart, allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;
    const history = useHistory();
    // const matchingApartments = apartments.find(apartment =>
    //     apartment.key === Number(id))


    // const { img, title, desc, price, rating, ratingCount } = matchingApartments;

    /*
    destructure korle ei line er dorkar nei

    const selected = matchingApartments?.title;*/
    useEffect(() => {
        fetch(`http://localhost:5000/apartments/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    setApartment(data)
                }
                else {
                    alert('service did not found')
                }
            })
    }, [id])

    return (
        <div className="my-4">

            {apartment?.title ? (
                <Container>
                    <Row>
                        <Col md={6}>
                            <img className="img-fluid" src={apartment.img} alt="" />
                        </Col>
                        <Col md={6} className="d-flex justify-content-center flex-column">
                            <h2>{apartment.title}</h2>
                            <p>{apartment.desc}</p>
                            <Row>
                                <Col className=" justify-content-center">
                                    <h5>Price: ${apartment.price}</h5>

                                    <div>
                                        <Rating

                                            initialRating={apartment.rating}
                                            readonly
                                            fullSymbol={<FontAwesomeIcon className="text-warning"
                                                icon={fullStar} />}
                                            emptySymbol={<FontAwesomeIcon className="text-warning"
                                                icon={emptyStar} />}

                                        />
                                        <span className="ms-2">{apartment.rating}</span>
                                        <p className="mb-0">Total Review: {apartment.ratingCount}</p>
                                        <button
                                            onClick={() => {
                                                if (uid) {
                                                    addToCart(apartment)
                                                }
                                                else {
                                                    history.push('/login')
                                                }

                                            }}
                                            className="btn btn-primary w-100 me-1">Add to Cart</button>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="text-center">
                                        <h4>Provider: Sumaia Akter</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>)
                : <div className="my-3 p-1">
                    <h2 className="my-5 p-5 text-center">No Apartments Found</h2>
                </div>}


        </div>
    );
};

export default Details;