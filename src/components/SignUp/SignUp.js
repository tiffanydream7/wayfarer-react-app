import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios'

const endPoint = 'https://teamblueapi.herokuapp.com/api/v1/auth/signup'

// class TodoModel {
//     static all(){
//       let request = axios.get(endPoint)
//       return request
//     }
// }
  
class SignUp extends Component {
    state = {
    username: '',
    currentCity: '',
    email: '',
    password: '',
    password2: ''
} 
    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post(endPoint, this.state)
          .then(response => {
            console.log(response);
            this.handleSuccess(response.data.newUser)
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    formChange = event => {
        const key = event.target.id;
        const value = event.target.value;
        this.setState({
                [key]: value
        })
    }

    handleSuccess = response => {
        console.log('please handle', response)
        console.log('<Redirect')
        this.props.getGuy('i think it will work')
        this.props.onHide();
    }

    render() {
        // console.log('fullName:', this.state.username)
        // console.log('currentCity:', this.state.currentCity)
        // console.log('email:', this.state.email)
        // console.log('password:', this.state.password)
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group onChange={this.formChange} controlId="username" required>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="" />
                </Form.Group>

                {/* <Form.Group onChange={this.formChange} controlId="currentCity" required>
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" name="currentCity" placeholder="" />
                </Form.Group> */}

                <Form.Group onChange={this.formChange} controlId="currentCity">
                    <Form.Label>Current City</Form.Label>
                    <Form.Control as="select">
                    <option>London</option>
                    <option>Sydney</option>
                    <option>San Francisco</option>
                    <option>Seattle</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group onChange={this.formChange} controlId="email" required>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" />
                </Form.Group>

                <Form.Group onChange={this.formChange} controlId="password" required>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="" />
                </Form.Group>
                
                <Form.Group onChange={this.formChange} controlId="password2" required>
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