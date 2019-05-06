import React, { Component } from "react";
import travel02 from '../images/travel02.jpeg';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import london from '../images/london.jpg';
import sydney from '../images/sydney.jpeg';
import sf from '../images/sf.jpg';
import seattle from '../images/seattle.jpg';


class Sidebar extends Component {
    getRed = (event) => {
    // when user click a city, it will turn yellow and the rest turn pink
        let allCity = document.querySelectorAll('.city-box')
        console.log('getRed');
        allCity.forEach(city => {
            city.setAttribute('style', 'background: white')
        })

        let city = event.target.parentNode
        city.setAttribute('style', 'background: rgb(237, 82, 82)')
        // city.setAttribute('style', 'background: red')
    }

    render() {
        return (
            // getYellow.style.background = 'yellow';

            <div className="sidebar">
                <div><span>Cities</span></div>

                <Row className="city-box" onClick={this.getRed}>
                    <Col><img src={london} alt="london"
                        width='150px' height='90px'  /></Col>
                  <Col>London</Col>
                </Row>

                <Row className="city-box" onClick={this.getRed} checked>
                    <Col ><img src={sydney} alt="sydney"
                        width='150px' height='90px' /></Col>
                  <Col>Sydney</Col>
                </Row>

                <Row className="city-box" onClick={this.getRed}>
                    <Col><img src={sf} alt="san francisco"
                        width='150px' height='90px' /></Col>
                  <Col>San Francisco</Col>
                </Row>

                <Row className="city-box" onClick={this.getRed}>
                    <Col><img src={seattle} alt="seattle"
                        width='150px' height='90px' /></Col>
                  <Col>Seattle</Col>
                </Row>
            </div>
            
        );
    }
    }


    export default Sidebar;
    