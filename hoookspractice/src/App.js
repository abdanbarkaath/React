import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import HookInput from './components/HookInput';
import Hookobj from './components/Hookobj';
import HookTimer from './components/HookTimer';
import Hookeffect from './components/Hookeffect';
import DataFetching from './components/DataFetching';
import ComponentA from './components/Context/ComponentA';
import Chook1 from './components/CustomHooks/Chook1';
import Chook2 from './components/CustomHooks/Chook2';

export const UserContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <Hook1></Hook1> */}
      {/* <Hook2></Hook2> */}
      {/* <HookInput></HookInput> */}
      {/* <Hookobj></Hookobj> */}
      {/* <HookTimer></HookTimer> */}
      {/* <Hookeffect></Hookeffect> */}
      {/* <DataFetching></DataFetching> */}
      {/* <UserContext.Provider value={"abdan"}>
        <ComponentA />
      </UserContext.Provider> */}
      <Chook1></Chook1>
      <Chook2></Chook2>
    </div>
  );
}

export default App;
