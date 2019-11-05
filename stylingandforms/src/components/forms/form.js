import React, { Component } from 'react'

export default class form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            topic:"Bike"
        }
    }

    update= (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    changeTopic=event=>{
        this.setState({
            topic:event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.update}></input>
                <select value={this.state.topic} onChange={this.changeTopic}>
                    <option>Bike</option>
                    <option>Car</option>
                    <option>Cycle</option>
                </select>
                <h1>{this.state.topic}</h1>
                </form>
                
            </div>
        )
    }
}
