import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards, Button } from 'react-bootstrap';
import Example from './Modal/Modal';
import LogOut from "./LogOut/LogOut";


class NavContainer extends Component {
  state = {
    login: false
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
    if (this.state.login) {
      napkin = (<div>
        <Col></Col> <Example logger={this.logToggler} signer={this.whosUsing} form='Login' />
        <Col></Col> <Example logger={this.logToggler} form='Sign up' />
        </div>)
    } else {
      napkin = (<div>            <Col></Col><Example logger={this.logToggler} navRead={this.read} form='LogOut' />
      <button onClick={this.getState}>stte</button></div>)
    }

          return (
            
            <Row className='signin-bar'>
            
            {napkin}
            
            <Col></Col><LogOut fun={this.logToggler} log="in" />}
            </Row>
            

            );
        }
    }


    export default withRouter(NavContainer);
    