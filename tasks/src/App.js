import React from 'react';
import './App.css';
import Lifecycle from './components/lifeCycle/lifecycle';
import Claz from './components/classnfunc/claz';
import Func from './components/classnfunc/func';
import TicTac from './components/ticTac/ticTac';

function App() {
  return (
    <div className="App">
      {/* <Lifecycle></Lifecycle> */}
      {/* <Claz name="abdan"></Claz> */}
      {/* <Func name="basil"></Func> */}
      <TicTac></TicTac>
    </div>
  );
}

export default App;
