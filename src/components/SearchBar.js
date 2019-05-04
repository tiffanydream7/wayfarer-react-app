import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image } from 'react-bootstrap';
import logo from '../images/logo.png';

class SearchBar extends Component {
    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();
    }

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
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Search"
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value})} />
                    
                </form>
            </div>
                        


              </Container>
            </nav>

         
            </header>
        )
    }
}

export default SearchBar

