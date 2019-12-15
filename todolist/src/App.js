import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';

class App extends Component {
  render(){
    return (
      <div className="App">
        <UserInput></UserInput>
      </div>
    );
  }
}

export default App;
