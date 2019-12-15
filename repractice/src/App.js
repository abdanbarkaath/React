import React, { Component } from "react";
import "./App.css";
import Child1 from "./components/child1";
import Cprop from "./components/cprop";
import Increment from "./components/increment";
import EventHandling from "./components/eventHandling";
import MethodsProps from "./components/methodsProps";
import Conditionals from "./components/Conditionals";
import ListRendering from "./components/ListRendering";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "abdan"
    };
  }
  greetParent = (val) => {
    console.log(`hello${val}`);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Cprop userName = "abdan"></Cprop> */}
          {/* <Child1/> */}
          {/* <Increment></Increment> */}
          {/* <EventHandling></EventHandling> */}
          <MethodsProps greetHandler = {this.greetParent}></MethodsProps>
          {/* <Conditionals></Conditionals> */}
          {/* <ListRendering></ListRendering> */}
        </header>
      </div>
    );
  }
}

export default App;
