import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Blog from './components/Blog';
import Example from './components/Modals/Modal';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import SignUp from './components/Modals/SignUp';
import LogIn from './components/Modals/LogIn';
import Landing from './components/Landing/Landing';
import MainPage from './components/MainPage';
import SearchBar from './components/SearchBar';
import PostProfile from './components/PostProfile';
// import Profile from './components/Profile';
 
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
        return ( <div className="App">
            <Header onClick = { this.addInfo }/> 
            <div className = "cool-box" >
            <Switch>
            <Route exact path = '/'component = { Landing }/> 
            <Route path = '/main' component = { MainPage }/> 
            <Route path = '/search' component = { SearchBar }/> 
            <Route path = '/tryposts' component = { PostProfile }/> 
            </Switch> 
            </div> 
            </div>

        );
    }
}

export default withRouter(App);