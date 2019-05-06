import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios'
import AuthModel from '../../models/AuthModel'

// const endPoint = 'https://teamblueapi.herokuapp.com/api/v1/auth/login'

class LogIn extends Component {
    state = {
            email: '',
            password:''
                }

    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        AuthModel.login(this.state)
          .then((response) => {
            console.log('in axios', response)
            this.handleSuccess(response);
          })
          .catch(error => {
            console.log(error);
          });
    }

    handleSuccess(response){
        console.log('at login', response.data.session.currentUser.id)
        const respect = response.data.session.currentUser.id;
        console.log('this part froro you', respect)
        this.props.getGuy(response)
        this.props.history.push(`/main/profile/${respect}`)
        this.props.onHide();
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


    export default withRouter(LogIn);
    