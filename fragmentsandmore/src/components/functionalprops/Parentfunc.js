import React, { Component } from 'react'
import Func from './Func'

export default class Parentfunc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
        this.run = this.run.bind(this)
        this.updatestate = this.updatestate.bind(this);
    }
    updatestate(e){
        this.setState({
            name:e.target.value
        })
    }
    run(val){
        console.log(val);
        console.log("hello");
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <Func update={this.updatestate} run = {this.run} name = {this.state.name}></Func>
            </div>
        )
    }
}
