import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            {/* Used to redirect the page */}
            <Link exact to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
              About
            </Link>
          </li>
          <li>
            <Link to="/login" >
              Login
            </Link>
          </li>
        </ul>
        {/* handles the redirection */}
        <Switch>
          {/* same as routerview shows the particular component */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
