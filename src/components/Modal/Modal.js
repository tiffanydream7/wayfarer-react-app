import React from 'react';
import './Modal.css';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import CreateNewPost from '../CreateNewPost';
// import { exportDefaultSpecifier } from '@babel/types';

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
    
handleShow = () => {
    this.setState({ show: true });
}
    
// form = formType =>{
//     if(this.props.form === "Log in"){
//         return <LogIn onHide={this.handleClose}/> 
//     }else if(this.props.form === "Sign in"){
//         return <SignUp onHide={this.handleClose}/>
//     }else{
//         return <CreateNewPost onHide={this.handleClose}/>
//     }
// }

    render() {
        console.log('form:', this.props.form)
        let title;
        let form;
        if(this.props.form === "Login"){
            form = <LogIn onHide={this.handleClose}/> 
        }else if(this.props.form === "Sign up"){
            form = <SignUp onHide={this.handleClose}/>
        }else{
            form = <CreateNewPost onHide={this.handleClose}/>
        }
        

          return (
            <>
                <Button className='my-btn' onClick={this.handleShow}>
                    {this.props.form}
                </Button>

                    <Modal show={this.state.show}
                    onHide={this.handleClose}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.form}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {form}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}


export default Example;