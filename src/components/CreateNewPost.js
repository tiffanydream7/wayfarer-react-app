import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'
import PostModel from "../models/PostModel";

const endPoint = 'localhost:4000/api/v1/auth/login'


class CreateNewPost extends Component {
    state = {
            city: 'London',
            title: '',
            content: '',
            user: this.props.user
            
    }
    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        PostModel.createPost(this.state)
        .then((response) => {
            this.handleSuccess(response);
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

    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group controlId="city">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>London</option>
                    <option>Sydney</option>
                    <option>San Francisco</option>
                    <option>Seattle</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group onChange={this.formChange} controlId="title" required>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="" />
                </Form.Group>
                <Form.Group onChange={this.formChange} controlId="content">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
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
    