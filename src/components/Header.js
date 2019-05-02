import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'


class Header extends Component {
    render() {
        return (
          <header>
            <title>Wayfarer</title>
            <nav>
               <Container className='header-box'>
            <Row className='logo'>
              <Col>Logo</Col><Link to={'/'}></Link>
              <Col>Wayfarer</Col><Link to={'/'}></Link>
            </Row>
            <Row className='signin-bar'>
              <Col></Col><Link to={'./login'}>Login</Link>
              <Col></Col><Link to={'/signup'}>Sign up</Link>
              {/* <Col>Profile</Col> */}
            </Row>
                </Container>
            
             <Container className='hero-image'>
            <Row>
              <Col>hero-image</Col>
            </Row>
                </Container>
                </nav>
            </header>
        )
    }
}

export default Header

