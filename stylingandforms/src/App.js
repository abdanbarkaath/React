import React from 'react';
import './App.css';
// import External from './components/Externalcss/External';
import Internal from './components/Internalcss/Internal';
import Form from './components/forms/form';

function App() {
  let name =["abdan","basil","turab"];
  return (
  <div className="App">
    {/* <External color={true}></External> */}
    <Internal childComp={name}></Internal>
    {/* <Form></Form> */}
  </div>
  )
}

export default App;
