import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import HookInput from './components/HookInput';
import Hookobj from './components/Hookobj';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      {/* <Hook1></Hook1> */}
      {/* <Hook2></Hook2> */}
      {/* <HookInput></HookInput> */}
      {/* <Hookobj></Hookobj> */}
      <HookTimer></HookTimer>
    </div>
  );
}

export default App;
