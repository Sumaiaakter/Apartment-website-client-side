import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import image from './../../assets/images/image1.png'
import image2 from './../../assets/images/image2.png'
import image3 from './../../assets/images/image3.png'



const Banner = () => {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h1><span className="text-white">Team Work</span> <br /> <span className="team">Coming Together is The Beginning <br /> Keeping Together is Progress <br /> Working Together is Success</span></h1>
                </div>
                <div className="col-md-6 mt-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  "
                                src={image} alt="First-Slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2} alt="Second-slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src={image3} alt="Third-slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;