import React from "react";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import CompCarousel from "../components/CompCarousel";
import CompCard from "../components/CompCard";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';


export default function Index() {
    const slideAnimation = keyframes`${slideInUp}`;

    const SlideDiv = styled.div` animation: 1s ${slideAnimation};`;

    return (
        <div id="FirstContainer">
            <CompCarousel />
            <div id="SecondContainer">
                <Container>
                    <h3>Título</h3>
                    <SlideDiv>
                        <CardGroup>
                            <CompCard img="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                name="Card"
                                description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <CompCard img="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                name="Card"
                                description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <CompCard img="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                name="Card"
                                description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <CompCard img="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                name="Card"
                                description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <CompCard img="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                name="Card"
                                description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                        </CardGroup>
                    </SlideDiv>
                </Container>
            </div>
        </div>
    );
}