import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import travel01 from '../../images/travel01.jpeg';
import Blog from "../Blog";

    class Landing extends Component {
    render() {
      return (
        <div class="landing-page">
    
          {/* <Container className='hero-image'> */}
              {/* <Row>
                <Col><img src={travel01} alt="travel01" /></Col>
              </Row> */}
          {/* </Container> */}
          <Blog />

        </div>
        );
    }
    }


    export default Landing;
    