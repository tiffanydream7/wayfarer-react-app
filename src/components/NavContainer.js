import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards, Button } from 'react-bootstrap';
import Example from './Modal/Modal';
import LogOut from "./LogOut/LogOut";


class NavContainer extends Component {
  state = {
    loggedIn: false
  };


  logout = () => {
    this.logToggler(false)
  }
  login = () => {
    this.logToggler(true)
  }
  getState = () => {
    console.log(this.state)
  }

    logToggler = bully => {
      console.log(bully)
      // this.setState({
      //   login: bully
      // })
    }
    read = word => {
      console.log(word)
    }

    // moveAround = () => {
    //   const userId = '5cce08dd06c00f000cf9b12d';
    //   this.props.history.push(`/main/profile/${userId}`);
    // }

    whosUsing = userman => {
      console.log('at nav:', userman.data)
      if (userman.data.session) {
        this.setState({
          login: true
        }) 
      }
    }


  render() {
    let napkin;
    console.log('navlog: ', this.state.loggedIn || this.state.login)
    if (!this.state.loggedIn && !this.state.login) {
      napkin = (<Row className='signin-bar'>
        <Col></Col> <Example logger={this.logToggler} signer={this.whosUsing} form='Login' />
        <Col></Col> <Example logger={this.logToggler} form='Sign up' />
        </Row>)
    } else {
      napkin = (<Row className='signin-bar'>            
        <Col></Col><Example logger={this.logToggler} navRead={this.read} form='LogOut' />
        <button onClick={this.getState}>stte</button>
        </Row>)
    }
      console.log('napkin: ', napkin)

          return (
            
            
            <>
            {napkin}
            </>
            
            

            );
        }
    }


    export default withRouter(NavContainer);
    