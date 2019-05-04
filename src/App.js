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
import MainPage from './components/MainPage';
import SearchBar from './components/SearchBar';
import CreateNewPost from './components/CreateNewPost';
// import Profile from './components/Profile';
 

class App extends Component {
 state = {
   info: false
 }

 addInfo = (event) => {
   this.setState({
     info: event.target
   })
   console.log(this.state)
 }


  render() {
    return (
      <div className="App">
        <Header onClick={this.addInfo}/>
        <div className="cool-box">
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route path='/main/profile' component={ MainPage }/>
            <Route path='/search' component={ SearchBar }/>
            <Route path='/newpost' component={ CreateNewPost }/>
          </Switch>
        </div>
      </div>
    
  );
}}

export default App;