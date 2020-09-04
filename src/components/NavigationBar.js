import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavHashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const Styles = styled.div`
    .navbar {
        height: 5vh;
        position: fixed;
    }

    .links {
        padding: 10px;
        border-radius: 5px;
        color: #BAD9D6;
    }
    
    .links:hover {
        font-weight: bold;
        text-decoration: none;
        color: #46A69C;
    }


    .color {
        background-color: clear;
    }


`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" fixed="top" bg="dark" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="#home" className="links" smooth="true">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects" className="links" smooth="true">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link exact href="#resume" className="links" smooth="true">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)