import React from "react";
import { Carousel } from "react-bootstrap";

const CompCarousel = (props) => {
    return (
        <Carousel id="Carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                />
                <Carousel.Caption id="Caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Second slide"
                />
                <Carousel.Caption id="Caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                />
                <Carousel.Caption id="Caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CompCarousel;