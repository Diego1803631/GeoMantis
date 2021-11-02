import React from "react";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import CompCarousel from "../components/CompCarousel";
import CompCard from "../components/CompCard";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';
import { zoomIn } from 'react-animations';


export default function Index() {
    const slideAnimation = keyframes`${slideInUp}`;
    const SlideDiv = styled.div` animation: 1s ${slideAnimation};`;

    return (
        <div>
            <div id="Inicio">
                <CompCarousel />
            </div>
            <div id="Nosotros">
                <Container >
                    <SlideDiv>
                        <h2>Acerca de Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img id="Img" src="https://aecmag.com/wp-content/uploads/2021/03/AEC_Twinmotion2020.jpg" alt="1" />
                        <img id="Img" src="https://archello.s3.eu-central-1.amazonaws.com/images/2017/07/05/Architecture-3d-model.1507346416.5539.jpg" alt="1" />
                    </SlideDiv>
                </Container>
            </div>
        </div>
    );
}