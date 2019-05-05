import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios'

const endPoint = 'https://teamblueapi.herokuapp.com/api/v1/auth/login'

class LogIn extends Component {
    state = {
            email: '',
            password:''
                }

    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post(endPoint, this.state)
          .then((response) => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    }

    formChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })

    }
    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group onChange={this.formChange} controlId="email" required>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="email" />
                </Form.Group>
                <Form.Group onChange={this.formChange} controlId="password" required>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="password" />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
    }


    export default LogIn;
    