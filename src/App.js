import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Home';
import {Projects} from './Projects';
import {NoMatch} from './NoMatch';
import { NavigationBar} from './components/NavigationBar';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { Separator } from './components/SeparatorComponent';
import AlkesSemiBd from './fonts/AlkesSemiBd.woff';


const Styles = styled.div`

  @font-face {
  font-family: 'Alkes Semibold';
  font-style: normal;
  font-weight: normal;
  src: local('Alkes Semibold'), url(${AlkesSemiBd}) format('woff');
  }

  #resume {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 10vh 10vh 10vh 10vh;
    background-color: #343A40;
  }

  #pdf {
    -webkit-box-shadow: 0px 0px 5vh 3vh rgba(113,143,153,0.6);
    -moz-box-shadow: 0px 0px 5vh 3vh rgba(113,143,153,0.6);
    box-shadow: 0px 0px 5vh 3vh rgba(113,143,153,0.6);
    margin-top: 5vh;
  }

  #navBar {
    height: 60px;
    width: 100%;
  }

  #projects {
    padding: 10vh 10vh 10vh 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #343A40;
  }

  .title {
    color: #227373;
    text-align: center;
    padding: 3.5vh 3vh 3vh 3vh;
    font-family: 'Alkes Semibold';
    font-size: 5vh;
    margin: 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 3vh;
  }

  .videoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
  }
`;

class App extends Component {
  render() {
    return (
      // creates a wrapper
      <React.Fragment> 
        <Router>
            <div id="navBar">
              <NavigationBar />
            </div>
            <Switch>
              <Link to="/#home"/>
              <Link to="/#contact"/>
              <Link to="/#resume"/>
              <Link to="/#projects"/>
              <Route component={NoMatch} />
              <Link to="/#anchor"></Link>
            </Switch>
          </Router>
        <Styles>
          <div id = "container">
          <div id = "home"/>
          <div >
            <Home />
          </div>
          <div id="projects">
            <div className="title">Projects</div>
            <Projects />
          </div>
          <Separator/>
          <div id="resume">
            <div className="title">Resume</div>
            <embed src={require('./assets/Resume.pdf')} width="40%" height="1000px" id="pdf"></embed>
          </div>
          </div>
          <Separator />
        </Styles>
      </React.Fragment>
    );
  }
  
}

export default App;
