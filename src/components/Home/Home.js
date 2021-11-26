import React from 'react';
import { Container, Button, Row } from "react-bootstrap";

import banner from './../../assets/images/banner.png'

import useAuth from '../../Hooks/useAuth';
import sectionBg from './../../assets/images/sectionBg.png';
import Apartment from '../Apartment/Apartment';


const Home = () => {
    const { apartments } = useAuth();
    return (
        <div>
            <div
                style={{
                    background: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    width: "100%"
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <h1 className="text-white">Learn to be creative</h1>
                            <p className="my-4 text-white fs-5">
                                Learn exciting technologies from web development, design, game
                                development and more!
                            </p>
                            <Button
                                className="rounded-pill fs-5 py-2 px-4"
                                variant="primary"
                            >
                                View Apartments
                            </Button>

                        </div>

                    </div>
                </Container>
            </div>

            {/* <h1>{apartments.length}</h1> */}
            <div id="feature" className="py-5" style={{ background: `url(${sectionBg})` }}>
                <div className="text-center text-white">
                    <h1>Our Featured Apartments</h1>
                    <p className="mb-0">Here you can find our all latest apartments
                    </p>
                </div>

                <Container>
                    <Row>
                        {
                            apartments.slice(0, 9).map(apartment => <Apartment
                                key={apartment.key}
                                apartment={apartment}

                            ></Apartment>)
                        }
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Home;