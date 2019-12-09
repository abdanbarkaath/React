import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Child1 from "./components/child1"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Child1/>
      </header>
    </div>
  );
}

export default App;
