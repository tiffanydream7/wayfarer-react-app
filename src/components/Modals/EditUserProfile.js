import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

class EditUserProfile extends Component {
    // state = this.props.userInfo
    
    currentUser = this.props.userInfo;
    
        formSubmit = event => {
            // event.preventDefault();
            // console.log(this.state)
            // axios.post(endPoint, this.state)
            //     .then(response => {
            //     console.log(response);
            //     this.handleSuccess(response.data.newUser)
            //     })
            //     .catch(error => {
            //     console.log(error);
            //     });
        }
        
        formChange = event => {

            const key = event.target.id;
            const value = event.target.value;
            // this.setState({
            //         [key]: value
            // })

        }
    
        handleSuccess = response => {
            console.log('please handle', response)
            // console.log('<Redirect')
            // this.props.getGuy('i think it will work')
            this.props.onHide();
        }

        // componentDidMount(){

        // }
    
        render() {
            console.log('edit form?', this.state)
            console.log(this.currentUser)
            return (
                <Form onSubmit={this.formSubmit}>
                    <Form.Group onChange={this.formChange} controlId="username" required>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="username" placeholder=""  />
                    </Form.Group>
    
                    <Form.Group onChange={this.formChange} controlId="currentCity">
                        <Form.Label>Current City</Form.Label>
                        <Form.Control as="select">
                        <option>London</option>
                        <option>Sydney</option>
                        <option>San Francisco</option>
                        <option>Seattle</option>
                        </Form.Control>
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


export default EditUserProfile;
