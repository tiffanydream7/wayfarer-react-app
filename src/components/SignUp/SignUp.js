import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios'

const endPoint = 'localhost:4000/api/v1/auth/login'

class TodoModel {
    static all(){
      let request = axios.get(endPoint)
      return request
    }
}
  
class SignUp extends Component {
    state = {
    // formData:
    fullName: '',
    currentCity: '',
    email: '',
    password: '',
    confirmPassword: ''
} 
    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    
    formChange = event => {
        const key = event.target.id;
        const value = event.target.value;
        // const newState = 
        this.setState({
            // formData: {
                [key]: value
            // }
        })
    }

    render() {
        console.log('fullName:', this.state.fullName)
        console.log('currentCity:', this.state.currentCity)
        console.log('email:', this.state.email)
        console.log('password:', this.state.password)
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group onChange={this.formChange} controlId="fullName" required>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" />
                </Form.Group>

                <Form.Group onChange={this.formChange} controlId="currentCity" required>
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" name="currentCity" placeholder="" />
                </Form.Group>

                <Form.Group onChange={this.formChange} controlId="email" required>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" />
                </Form.Group>

                <Form.Group onChange={this.formChange} controlId="password" required>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="" />
                </Form.Group>
                
                <Form.Group onChange={this.formChange} controlId="confirmPassword" required>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password2" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formBasicChecbox">
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

    export default SignUp;