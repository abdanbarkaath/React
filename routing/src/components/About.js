import React from "react";
import {
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";

export default function About() {
  let { path, url } = useRouteMatch();
  const route = (
    <Router>
      <ul>
        <li>
          <Link to={`${url}/login`}>Login</Link>
        </li>
      </ul>
      <Switch>
          <Route path={`${url}/login`} component={Login}/>
      </Switch>
    </Router>
  );
  return (
    <div>
      <h1>About us {url} id</h1>
      {route}
    </div>
  );
}
