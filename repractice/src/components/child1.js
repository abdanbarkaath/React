import React, { Component } from 'react'

export default class child1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abdan",
             age:23,
             seen:false
        }
        this.changeVal  = this.changeVal.bind(this);
    }
    
    changeVal () {
        const { seen } = this.state;
        this.setState({
            seen: !seen
        })
    }
    print(){
        console.log("hello")
    }
    
    render() {
        let ages, names;
        const { seen } = this.state;
        if(seen){
            ages =<h1>Age: {this.state.age}</h1>
        }else{
            names = <h1>Name: {this.state.name}</h1>
        }
        return (
            <div>
                {ages}
                {names}
                <button onClick={this.changeVal}>click me to change the Value</button>
            </div>
        )
    }
}
