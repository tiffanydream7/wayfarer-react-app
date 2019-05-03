import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';


class Blog extends Component {
    render() {
        return (
            <Container className="blog">
                <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                        <Button variant="warning">Learn More</Button>
                        </Card.Body>

                </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                        <Button variant="warning">Learn More</Button>
                        </Card.Body>

                </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                        <Card.Title>Card Title</Card.Title>
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