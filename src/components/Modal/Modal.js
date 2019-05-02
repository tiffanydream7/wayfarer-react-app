import React from 'react';
import './Modal.css';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

class Example extends React.Component {
constructor(props, context) {
super(props, context);

this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);

this.state = {
show: false,
};
}

handleClose() {
this.setState({ show: false });
}

handleShow() {
this.setState({ show: true });
}

render() {
return (
<>
    <Button variant="primary" onClick={this.handleShow}>
        Login
    </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>username:</Form.Label>
                    <Form.Control type="name" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Modal.Title>Sign up</Modal.Title>
            </Form>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>username:</Form.Label>
                    <Form.Control type="name" placeholder="" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
</>
);
}
}


export default Example;