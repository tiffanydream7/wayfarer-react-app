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

    resetState = () => {
      this.state = {
        loggedIn: false
      }
    }

    whosUsing = userman => {
      console.log('at nav:', userman.data)
      if (userman.data.session) {
        console.log(userman.data.session)
        const { currentUser, loggedIn} = userman.data.session;
        this.setState({
          currentUser, loggedIn
        })
      }
    }


  render() {
    let napkin;
    console.log('navlog: ', this.state.loggedIn)
    if (!this.state.loggedIn) {
      napkin = (<Row className='signin-bar'>
        <Col></Col> <Example signer={this.whosUsing} form='Login' />
        <Col></Col> <Example logger={this.logToggler} form='Sign up' />
        </Row>)
    } else {
      napkin = (<Row className='signin-bar'>            
        <Col></Col><Example logout={this.resetState} navRead={this.read} form='LogOut' />
        </Row>)
    }
      console.log('napkin: ', napkin)

          return (
            
            
            <>
            {napkin}
            <button onClick={this.getState}>stte</button>
            <button onClick={this.resetState}>reset</button>
            
            </>
            
            

            );
        }
    }


    export default withRouter(NavContainer);
    