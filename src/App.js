import React, { Component } from 'react';
import Logo from './components/Logo';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  apiKey: '87dfa1c669eea853da609d4968d294be';
  
  getInitialState() {
    return {searchTerm:"", searchUrl:""};
  }
  
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
        </header>
        <Hero />
      </div>
    );
  }
}

export default App;
