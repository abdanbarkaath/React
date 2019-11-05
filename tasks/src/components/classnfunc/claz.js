import React, { Component } from 'react'

export default class claz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:1
        }
        const that = this
        // this.change = this.change.bind(that);
    }

    change(){
        console.log("hello");
        console.log(this.state.x);
    }
    
    render() {
        return (
            <div>
                <h1>My name is {this.props.name}</h1>
                <button onClick={this.change}>click</button>
            </div>
        )
    }
}
