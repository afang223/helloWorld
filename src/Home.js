import React from 'react'
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import munich from './fonts/munich.woff';
import AlkesSemiBd from './fonts/AlkesSemiBd.woff';
import NotoSans from './fonts/NotoSans.woff';


const Styles = styled.div`
    @font-face {
        font-family: 'Munich Sans';
        src: local('Munich Sans'), local('MunichSans'),
        url(${munich}) format('woff');
        font-weight: 300;
        font-style: normal;
    }


    @font-face {
        font-family: 'Alkes Semibold';
        font-style: normal;
        font-weight: normal;
        src: local('Alkes Semibold'), url(${AlkesSemiBd}) format('woff');
        }

    @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: normal;
        src: local('NotoSans'), url(${NotoSans}) format('woff');
        }

    #container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 95vh;
        padding: 5vh;
    }
    #profile {
        width: 200/3vh;
        height: 50vh;
        -webkit-box-shadow: 0px 0px 21px 30px rgba(113,143,153,0.6);
        -moz-box-shadow: 0px 0px 21px 30px rgba(113,143,153,0.6);
        box-shadow: 0px 0px 21px 30px rgba(113,143,153,0.6);

        border: 1vh solid #1E3C47;
        border-radius: 10px;
        margin-right: 5vh;
    }

    #description {
        background-color: rgba(39, 78, 92, 0.7);
        width: 40vw;
        height: 50vh;
        margin-left: 5vh;
        border-radius: 4vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 7vh;
        font-family: 'Alkes Semibold';
        font-weight: bold;
    }

    h2 {
        font-size: 2.4vh;
        font-family: 'Alkes Semibold';
    }

    h3 {
        font-size: 1.5vh;
        font-family: 'NotoSans';
    }

    h1, h2, h3 {
        color: #FCEDED;
    }

    #text {
        width: 75%;
    }

    #links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 75%;
        margin-top: 2vh;
    }

    #email {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 75%;
        margin-top: 2vh;
    }

    #emailIcon {
        height: 3vh;
        margin-right: 0.5vw;
    }

    #emailAddress {
        margin: 0;
        color:white;
        font-family: 'Alkes Semibold';
        font-weight: bold;
    }

    .icon {
        height: 5vh;
        width: 5vh;
    }

    #github {
        margin-right:2vh;
    }
    #linkedIn {
        margin-left: 2vh;
    }
`;

export const Home = () => (
    <Styles>
        <Parallax
            bgImage={require('./assets/blueMountains.jpg')} strength={500}
        >
            <div style={{ width: '100%', height:'100vh'}}>
                <div id="container">
                    <div id = "image">
                        <img src={require('./assets/profile.png')} id="profile"></img>
                    </div>
                    <div id="description">
                        <div id="text">
                            <h2>Hello, I'm</h2>
                            <h1>Andy Fang</h1>
                            <h2>Software Developer</h2>
                            <br></br>
                            <h3>Currently, I am pursuing a double major in Computer Science and Economics 
                                at the University of California, Berkeley. I am currently exploring 
                                my options within the realm of computer science, with a particular interest
                                in machine learning. Feel free to reach out to me, I would love to chat!</h3>
                        </div>
                        <div id="links">
                            <a href="https://github.com/afang223">
                                <img src={require('./assets/githubLogo.png')} className="icon" id="github"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/andy-fang-722898142/">
                            <img src={require('./assets/linkedin.png')} className="icon" id="linkedIn"></img>
                            </a>
                        </div>
                        <div id="email">
                            <img src={require('./assets/email.png')} id="emailIcon"></img>
                            <p id="emailAddress">andyfang486@berkeley.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </Styles>

)
