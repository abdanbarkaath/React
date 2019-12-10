import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Child1 from './components/child1';
// import Child2 from './components/child2';
// import State from './components/state';
// import Eventbind from './components/eventbind';
// import Parentcomp from './components/parentcomp';
// import Conditionals from './components/conditionals';
// import Listrendering from './componensts/Listrendering';
// import Practice from './components/practice';
import Colors from './components/colors';


function App() {
  // var arr = ["abdan","basil","qadeer"];
  // var names = arr.map(x=>x);
  return (
    <div className="App">
     {/* <Child1></Child1> */}
     {/* <Child2 name="abdan">this is child2</Child2> */}
     {/* <Child2 name="basil"/> */}
     {/* <Child2 name={names}/> */}
     {/* <State></State> */}
     {/* <Eventbind></Eventbind> */}
     {/* <Parentcomp></Parentcomp> */}
     {/* <Conditionals></Conditionals> */}
     {/* <Listrendering></Listrendering> */}
     {/* <Practice name = "abdan"></Practice> */}
     <Colors></Colors>
    </div>
  );
}

export default App;
