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
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 1803
      }
    }
  }
}

//     Particles: {
//     number: {
//         value: 40,
//         density: {
//          enable: true,
//          value_area:30 
//       }
//     }
//        }
// }
      
class App extends Component {
  // onSearchSubmit(term) {
  //   console.log(term);
  // }
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
        <Particles className="particles"
          params={particlesOptions} />
        <Header onClick={this.addInfo}/>
        <div className="cool-box">
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route path='/main/profile' component={ MainPage }/>
            <Route path='/search' component={ SearchBar }/>
          </Switch>
        </div>
      </div>
    
  );
}}

export default App;