import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  go() {
    this.props.history.push("/about");
  }

  async getUsers() {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        this.setState({
          info: response.data
        });
        console.log(this.state.info[0]);
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    let users = this.state.info.map((user,index) => <ul>
        <li key={index}>{user.name}</li>
    </ul>);
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <button onClick={() => this.go()}>About</button>
          </li>
        </ul>
        <div>
          <button onClick={() => this.getUsers()}>get users</button>
        </div>
        {users}
      </div>
    );
  }
}
