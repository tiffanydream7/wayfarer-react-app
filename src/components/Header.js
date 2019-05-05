import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Example from './Modal/Modal';
import logo from '../images/logo.png';
import travel01 from '../images/travel01.jpeg';
import NavContainer from './NavContainer';


class Header extends Component {
  
    render() {
        return (
          <header>
            <title>Wayfarer</title>
            <nav>
               <Container className='header-box'>
            <Row className='logo'>
                <Col><img src={logo} alt="Logo" width='100px' height='70px' /></Col>
                <Link to={'/'}></Link>
                <Col>Wayfarer</Col><Link to={'/'}></Link>
            </Row>
              <NavContainer />
              </Container>
            </nav>

         
            </header>
        )
    }
}

export default Header

