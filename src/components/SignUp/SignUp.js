import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';


    class SignUp extends Component {
    render() {
        return (
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="name" placeholder="" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="" /> */}
                {/* <Form.Text className="text-muted">
                    We'll never share your full name with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                    <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password2" placeholder="" />
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


    export default SignUp;
    