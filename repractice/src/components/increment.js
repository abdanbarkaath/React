import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class increment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }

  increment = () => {
    this.setState(prev => ({
      count: prev.count + 1
    }),()=>{console.log(this.state.count);});
  };

  incrementFive = () => {
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <h1>count = {this.state.count}</h1>
        <Button onClick={this.incrementFive}>Click me</Button>
      </div>
    );
  }
}
