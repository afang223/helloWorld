import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
                        <Link to="/#home" className="links" smooth="true">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/#projects" className="links" smooth="true">Projects</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link exact to="/#resume" className="links" smooth="true">Resume</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)