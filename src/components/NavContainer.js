import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards, Button } from 'react-bootstrap';
import Example from './Modal/Modal';


    class NavContainer extends Component {
        render() {
            return (
            <Row className='signin-bar'>
            <Col></Col><Example form='Login' />
            <Col></Col><Example form='Sign up' />
            <Col></Col><Example form='Logout' /> 
            </Row>


            );
        }
    }


    export default NavContainer;
    