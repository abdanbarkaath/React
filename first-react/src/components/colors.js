import React, { Component } from 'react'

class Colors extends Component {
    constructor(){
        super();
        this.state={
          colors:["red","blue","green"]
        }
      }
    
      render() {
        let display = this.state.colors.map((color)=>{
         return  <h1 style={{color:color}}>hello world</h1>
        })
        return display
      }
}
export default Colors;
    