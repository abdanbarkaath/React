import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "welome home",
      count:0
    };
  }
  change() {
        // this.setState({
        //     message:"changed the text using state",
        //     count:this.state.count + 1
        // })
        // console.log(this.state.count);
        this.setState(prev=>({
            count:prev.count+1
        }))
        console.log(this.state.count);
  }

  update(){
      this.change();
      this.change();
      this.change();
      this.change();
  }
  clicked(){
      console.log("clicked")
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.update()}> Change</button>
        <button onClick={this.clicked}>click me</button>
      </div>
    );
  }
}
export default State;
