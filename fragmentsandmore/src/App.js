import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentFragments from './components/fragments/ParentFragments';
import ParentComp from './components/Purecomponents/ParentComp';
import ParentMemo from './components/Memo/ParentMemo';
import Refs from './components/Refs/Refs';
import Parentfunc from './components/functionalprops/Parentfunc';

function App() {
  return (
    <div className="App">
      {/* <ParentFragments></ParentFragments> */}
      {/* <ParentComp></ParentComp> */}
      {/* <ParentMemo></ParentMemo> */}
      {/* <Refs></Refs> */}
      <Parentfunc></Parentfunc>
    </div>
  );
}

export default App;
