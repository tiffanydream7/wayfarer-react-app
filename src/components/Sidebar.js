import React, { Component } from "react";
import travel02 from '../images/travel02.jpeg';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import london from '../images/london.jpg';
import sydney from '../images/sydney.jpeg';


    class Sidebar extends Component {
    render() {
        return (

            <Container className="sidebar">
                <Row>
                  <Col>image</Col>
                  <Col xs={8}>London</Col>
                </Row>
            </Container>
            
        // <div className="sidebar">
        //         Cities
        // <div id="city">
        //     <Card style={{ width: '18rem' }}>
        //     <ListGroup variant="flush">
        //         <ListGroup.Item>London</ListGroup.Item>
        //         <img src={london} alt="london" width='100px' height='70px' />
        //         <ListGroup.Item>Sydney</ListGroup.Item>
        //         <img src={sydney} alt="sydney" width='100px' height='70px' />
        //         <ListGroup.Item>San Francisco</ListGroup.Item>
        //         <ListGroup.Item>Seattle</ListGroup.Item>
        //     </ListGroup>
        //     </Card>
        //     </div>
        // </div>
            
            
        );
    }
    }


    export default Sidebar;
    