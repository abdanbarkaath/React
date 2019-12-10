// import React from 'react'

import React, { Component } from 'react';

// //props
// function Child2(props){
//     return <h1>hello {props.name}</h1>
// }



class Child2 extends Component{

    render(){
        return <div>
        <h1>hello {this.props.name}</h1>
        {this.props.children}
        </div> 
    }
}
export default Child2;