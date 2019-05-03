import React, { Component }from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Blog from './components/Blog';
import Example from './components/Modal/Modal';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Landing from './components/Landing/Landing';
// import Profile from './components/Profile';
 

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <Header />
        <div className="cool-box">
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='Blog' component={ Blog }/>
            <Route path='/Profile' component={ Profile }/>
          </Switch>
        </div>
      </div>
    
  );
}}

export default App;