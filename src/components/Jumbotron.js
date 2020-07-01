import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/background.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 55;
        left: 0;
        bottom: 0;
        right: 0;
        height: 200px;
        z-index: -1;
    }
    
    .text {
        color: #efefef;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="text">Welcome</h1>
            </Container>
        </Jumbo>
    </Styles>
)