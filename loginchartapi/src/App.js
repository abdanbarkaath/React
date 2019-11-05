import React from 'react';
import './App.css';
import Login from './components/Home/Login/Login';
import Signup from './components/Home/SignUp/Signup';
import Weather from './components/Weather/Weather';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Parent from './components/Routing/Parent'

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route path={"/"}exact component={Login}></Route>
      <Route path={"/login"} component={Login}></Route>
      <Route path={"/signup"} component={Signup}></Route>
      <Route path={"/dashboard"} component={Dashboard}></Route>
      <Route path={"/weather"} exact component={Weather}>
      </Route>
      <Route path={"/parent"} exact component={Parent}></Route>
      </Switch>
    </div>
    </Router>
    // <div className="App">
      // {/* <Login></Login> */}
      // {/* <Signup></Signup> */}
      // {/* <Dashboard></Dashboard> */}
      // <Weather></Weather>
    // </div>
  );
}

export default App;
