import React, { Component } from "react";
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
import defaultImage from '../../images/zack.jpeg';
import london from '../../images/london.jpg';
import sydney from '../../images/sydney.jpeg';
import sf from '../../images/sf.jpg';
import seattle from '../../images/seattle.jpg';

class CityProfile extends Component {
    render() {
        let profile;
        switch(this.props.match.params.citiesId){
            case "london":
                return (profile = (
                    <Row>
                    <Col>
                        <h1>London</h1>
                        <h4>United Kingdom</h4>
                        <p>Writing or creative media, they've inspired me to travel the world.Whether it was through their writing or creative media, they've inspired me to travel the world.</p>
                    </Col>
                        <Col><img src={london} onClick={this.sttata} className="profile-photo" />
                        </Col>
                    </Row>
                ));
                break;
            case "sydney":
                return (profile = (
                    <Row>
                    <Col>
                        <h1>Sydney</h1>
                        <h4>Australia</h4>
                        <p>Their writing or creative media, they've inspired me to travel the world.Whether it was through their writing or creative media, they've inspired me to travel the world.</p>
                    </Col>
                        <Col><img src={sydney} onClick={this.sttata} className="profile-photo" />
                        </Col>
                    </Row>
                ));
            case "sf":
                return (profile = (
                    <Row>
                    <Col>
                        <h1>San Francisco</h1>
                        <h4>United States</h4>
                        <p>Creative media, they've inspired me to travel the world.Whether it was through their writing or creative media, they've inspired me to travel the world.</p>
                    </Col>
                        <Col><img src={sf} onClick={this.sttata} className="profile-photo" />
                        </Col>
                    </Row>
                ));
            case "seattle":
                return (profile = (
                    <Row>
                    <Col>
                        <h1>Seattle</h1>
                        <h4>United States</h4>
                        <p>Media, they've inspired me to travel the world.Whether it was through their writing or creative media, they've inspired me to travel the world.</p>

                    </Col>
                        <Col><img src={seattle} onClick={this.sttata} className="profile-photo" />
                        </Col>
                    </Row>
                ));
}



        console.log(this.props.match.params.citiesId)
        return (
            
        <div>CityProfile</div>
        );
    }
    }


export default CityProfile;
    