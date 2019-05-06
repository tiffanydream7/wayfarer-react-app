import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image } from 'react-bootstrap';
import logo from '../images/logo.png';

class SearchBar extends Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <input
                    type="text"
                    value={this.state.term}
                    placeholder="Search"
                    onChange={(e) => this.setState({ term: e.target.value })} />
                    
                </form>
                        

         
        )
    }
}

export default SearchBar

