import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Login from './components/Login';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Profile />
    </div>
  );
}}

export default App;
