import React, { Component } from "react";
import "./App.css";
import ListParent from "./components/parent/ListParent";
import Forms from "./components/parent/Forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <ListParent></ListParent> */}
          <Forms></Forms>
        </header>
      </div>
    );
  }
}

export default App;
