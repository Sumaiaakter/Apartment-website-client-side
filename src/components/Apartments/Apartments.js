import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Apartment from '../Apartment/Apartment';
import sectionBg from './../../assets/images/sectionBg.png';

import './Apartments.css'

const Apartments = () => {

    const { apartments, totalPage, currentPage, setCurrentPage } = useAuth();
    //pagination----------------

    function pageHandler(number) {
        setCurrentPage(number);

    }
    console.log(currentPage);

    return (
        <div className="py-5" style={{ background: `url(${sectionBg})` }}>
            <div className="text-center text-white">
                <h1>All Apartments</h1>
                <p className="mb-0">Here you can find our all latest apartments
                </p>
            </div>

            <Container>
                <div className="my-3 d-flex flex-wrap justify-content-between ">
                    <Row>
                        {
                            apartments.map(apartment => <Apartment
                                key={apartment._id}
                                apartment={apartment}

                            ></Apartment>)
                        }
                    </Row>
                </div>

                {/* pagination*/}
                <div className="d-flex justify-content-center">
                    {
                        [...Array(totalPage).keys()].map(number => <button
                            onClick={() => pageHandler(number)}
                            key={number}
                            className={number === currentPage ? 'btn btn-primary rounded-0 border' : 'btn text-white rounded-0 border'}
                        >{number + 1}</button>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Apartments;