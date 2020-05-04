import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title=" GitHub Finder" icon="fab fa-github " />
        <UserItem />
      </div>
    );
  }
}

export default App;
