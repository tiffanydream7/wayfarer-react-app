import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import travel01 from '../../images/travel01.jpeg';
import travel02 from '../../images/travel02.jpeg';
import Blog from "../Blog";
import Particles from "react-particles-js";

    class Landing extends Component {
    render() {
      return (
        <div className="landing-page">
              <Row>
                <Col><img src={travel01} alt="travel01" width="100%" height="50%"/></Col>
          </Row>
          <Row>
            <Col><Blog /></Col>
              </Row>
              <Particles className="particles" />


          </div>
      );
   
    }
    }


    export default Landing;
    