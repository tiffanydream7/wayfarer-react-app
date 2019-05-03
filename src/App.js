import React, { Component }from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Blog from './components/Blog';
import Example from './components/Modal/Modal';
import { Route, Link, Switch } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
// import Profile from './components/Profile';
 

class App extends Component {
 

  render() {
    return (
    <>
      <div className="App">
        <Header />
        <Profile />
        <Blog />
        {/* <Example show={this.state.showModal}/> */}
      </div>
      <div className="container">
        <Switch>
          <Route exact path='/' component={ Header }/>
          <Route path='/SignUp' component={ SignUp }/>
          <Route path='/LogIn' component={ LogIn }/>
          {/* <Route path='/Profile' component={ Profile }/> */}
        </Switch>
      </div>
    </>
    
  );
}}

export default App;