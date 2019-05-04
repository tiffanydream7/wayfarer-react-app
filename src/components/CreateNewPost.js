import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'

const endPoint = 'localhost:4000/api/v1/auth/login'

// class TodoModel {
//     static all(){
//       let request = axios.get(endPoint)
//       return request
//     }
// }

class CreateNewPost extends Component {
    state = {
        // formData: {
            city: ['London', 'Sydney', 'San Francisco', 'Seattle'],
            title: '',
            message: ''
            
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
        console.log('title:', this.state.title)
        console.log('message:', this.state.message)

        // console.log(event.target.id, event.target.value)
    }
    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <DropdownButton id="dropdown-basic-button" title="Choose City">
                <Dropdown.Item onCLick={this.state.city}>London</Dropdown.Item>
                <Dropdown.Item onCLick={this.state.city}>Sydney</Dropdown.Item>
                <Dropdown.Item onCLick={this.state.city}>San Francisco</Dropdown.Item>
                <Dropdown.Item onCLick={this.state.city}>Seattle</Dropdown.Item>
                </DropdownButton>
            <Form.Group onChange={this.formChange} controlId="title" required>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
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


    export default CreateNewPost;
    