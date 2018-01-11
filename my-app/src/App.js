import React, { Component } from 'react';
import logo from './logo_blue.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="Nav-item">About</h2>
          <h2 className="Nav-item">Toys</h2>
          <h2 className="Nav-item">News</h2>
          <h2 className="Nav-item">Contact</h2>
          <form className="Form-search">
            <input type="search" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
