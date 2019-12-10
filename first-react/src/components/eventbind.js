import React, { Component } from 'react'

export class eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:"hello"
        }
        this.change = this.change.bind(this);
    }

    change(){
        this.setState({
            message:"message changed"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.change.bind(this)}>click to change the text</button> */}
                <button onClick={()=>this.change()}>click to change the text</button>
            </div>
        )
    }
}

export default eventbind

//three ways to bind 
//1 using constructor
//2 using bind(this)
//3 using the arrow function