import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Computer Engineering ,PSU Phuket Campus</h1>
        <CharacterCard value="h" />
        <CharacterCard value="i" />
      </div>
    );
  }
}
export default App;
