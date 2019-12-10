import React from 'react';
import './App.css';
import Child1 from "./components/child1"
import Cprop from "./components/cprop"
import Increment from './components/increment';
import EventHandling from './components/eventHandling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Cprop userName = "abdan"></Cprop> */}
        {/* <Child1/> */}
        {/* <Increment></Increment> */}
        <EventHandling></EventHandling>
      </header>
    </div>
  );
}

export default App;
