import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards, Button } from 'react-bootstrap';
import Example from './Modal/Modal';


class NavContainer extends Component {
  state = {
    login: false
  };

      render() {
        // let { login } = this.state;

          return (
            
            <Row className='signin-bar'>
            <Col></Col><Example form='Login' />
            <Col></Col><Example form='Sign up' />
            
              {/* {login ? ( */}
            {/* <li onClick={this.state.login_}></li> */}
            <Col></Col><Example form='Sign up' />
          
            <Col></Col><button>Logout</button> 
            </Row>

            

            );
        }
    }


    export default NavContainer;
    