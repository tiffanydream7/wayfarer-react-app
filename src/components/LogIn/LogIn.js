import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';


    class LogIn extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="name" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
    }


    export default LogIn;
    