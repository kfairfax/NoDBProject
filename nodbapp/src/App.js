import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CreateGift from './components/CreateGift/CreateGift'
import Gift from './components/Gift/Gift'
import Buttons from './components/Buttons/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Wedding Gift Registry</h1>
        </header>
        
        <CreateGift/>
      </div>
    );
  }
}

export default App;
