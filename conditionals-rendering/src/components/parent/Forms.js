import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: "",
      users: []
    };
  }

  changeValue = e => {
    if (e.key === "Enter") {
      this.addUser();
      this.setState({
        info: ""
      });
    } else {
      e.persist();
      this.setState({
        info: e.target.value
      });
    }
  };

  addUser = () => {
    let { info, users } = this.state;
    users.push(info);
    console.log(users);
    this.setState({
      info: ""
    });
  };

  render() {
    let users = this.state.users.map((val, index) => (
      <ul key={index}>
        <li>{val}</li>
      </ul>
    ));
    return (
      <div>
        <h1>{users}</h1>
        <Input
          type="text"
          onChange={this.changeValue}
          onKeyPress={this.changeValue}
          value={this.state.info}
        ></Input>
        <Button onClick={this.addUser} variant="outlined" color="primary">
          Send data
        </Button>
      </div>
    );
  }
}
