import React, { Component } from "react";

class practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isLoggedin:true,
      name:"abdan"
    };
  }

  componentDidMount() {
    setInterval(
        () =>{
            this.setState({
                date:new Date
            })
        },
        1000
      );
    console.log("update");
  }

  run(e){
      var x = e;
      function change(params) {
        console.log(x.target.value);
      }
      change();
    console.log(e.target.value);
  }

  render() {
      const x =[1,2,3,4,5];
      const list = x.map((index,val)=><p key={index}>{val}</p>)
      return list
    // return (
    //   <div>
    //     <h1>{this.state.date.toLocaleTimeString()}</h1>
    //     <input type="text" onKeyPress={this.run}></input>
    //     <button>click me</button>
    //     <hr></hr>
    //     {this.state.isLoggedin &&
    //     <h1>{this.state.name}</h1>
    //     }
    //     <p>the use is {this.state.isLoggedin ? 'logged in' : 'not logged in'} </p>
    //     {this.state.isLoggedin ? (<p>logged</p>) : (<p>not logged </p>)}
    //   </div>
    // );
  }
}

export default practice;
