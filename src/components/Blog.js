import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';
import fish01 from '../images/fish01.jpeg';
import fish02 from '../images/fish02.jpeg';
import fish04 from '../images/fish04.jpeg';


class Blog extends Component {
    render() {
        return (
            <Container className="blog">
                <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={fish01} />
                <Card.Body>
                    <Card.Title>Enjoy The Life</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                        <Button variant="warning">Learn More</Button>
                        </Card.Body>

                </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={fish04} />
                    <Card.Body>
                        <Card.Title>Explore The Ocean</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                        <Button variant="warning">Learn More</Button>
                        </Card.Body>

                </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={fish02} />
                <Card.Body>
                        <Card.Title>Expand Your Horizon</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                        <Button variant="warning">Learn More</Button>
                </Card.Body>
                </Card>
            </Container>
            
        )
    }
}


export default Blog