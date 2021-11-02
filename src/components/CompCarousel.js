import React from "react";
import { Carousel } from "react-bootstrap";

const CompCarousel = (props) => {
    return (
        <Carousel id="Carousel">
            <Carousel.Item interval={5000}>
                <img id="imgc"
                    className="d-block w-100"
                    src="https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1548843586/p/photo/image/2893853/2016_arquitectura_moradia_lote_8_pt_1/fotos-de-villas-de-estilo-moderno-en-blanco-de-ma-teria-architecture-solutions.jpg"
                    alt="First slide"
                />
                <Carousel.Caption id="Caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img id="imgc"
                    className="d-block w-100"
                    src="https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1548843586/p/photo/image/2893853/2016_arquitectura_moradia_lote_8_pt_1/fotos-de-villas-de-estilo-moderno-en-blanco-de-ma-teria-architecture-solutions.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption id="Caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CompCarousel;