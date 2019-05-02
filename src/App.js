import React, { Component }from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Blog from './components/Blog';
import Example from './components/Modal/Modal';
import { Route, Link, Switch } from 'react-router-dom'



class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Blog />
      <Example />
    </div>
  );
}}

export default App;