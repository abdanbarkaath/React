import React, { Component } from "react";
import "./tictac.css";

class TicTac extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p1: 1,
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    this.check = this.check.bind(this);
  }

  componentDidUpdate() {
    console.log("updated");
    setTimeout(this.check,500);
  }
  //main
  box = e => {
    // console.log(e.target.className);
    let s = e.target.className;
    var charvalue = s.charAt(4);
    var arr = [...this.state.x];
    if (this.state.p1 === 1) {
      if (e.target.textContent === "X" || e.target.textContent === "") {
        e.target.textContent = "X";
        arr[charvalue] = "X";
        console.log(arr);
        this.setState({
          p1: 0,
          x: arr
        });
        console.log(this.state.p1);
      }
    } else {
      if (e.target.textContent === "O" || e.target.textContent === "") {
        e.target.textContent = "O";
        arr[charvalue] = "O";
        console.log(arr);
        this.setState({
          p1: 1,
          x: arr
        });
      }
      console.log(this.state.p1);
    }
  };

  check() {
    if (
      this.state.x[0] === this.state.x[1] &&
      this.state.x[1] === this.state.x[2]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[0] === this.state.x[3] &&
      this.state.x[3] === this.state.x[6]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[3] === this.state.x[4] &&
      this.state.x[4] === this.state.x[5]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[6] === this.state.x[7] &&
      this.state.x[7] === this.state.x[8]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[1] === this.state.x[4] &&
      this.state.x[4] === this.state.x[7]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[2] === this.state.x[5] &&
      this.state.x[5] === this.state.x[8]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[0] === this.state.x[4] &&
      this.state.x[4] === this.state.x[8]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    } else if (
      this.state.x[2] === this.state.x[4] &&
      this.state.x[4] === this.state.x[6]
    ) {
      if (this.state.p1 === 0) {
        alert("player 1 won");
      } else {
        alert("player 2 won");
      }
    }
  }

  render() {
    return (
      <div>
        <table className="tables" onClick={this.box}>
          <tbody>
            <tr className="row-1">
              <td className="col-0"></td>
              <td className="col-1"></td>
              <td className="col-2"></td>
            </tr>
            <tr className="row-2">
              <td className="col-3"></td>
              <td className="col-4"></td>
              <td className="col-5"></td>
            </tr>
            <tr className="row-3">
              <td className="col-6"></td>
              <td className="col-7"></td>
              <td className="col-8"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TicTac;
