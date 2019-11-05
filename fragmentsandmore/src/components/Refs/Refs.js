import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props) {
        super(props)
    
        
        this.inputRef=React.createRef();
        this.cbRef = null;
        this.setCbRef= (e)=>{
            this.cbRef = e.cbRef.current.value;
        }
        this.update = this.update.bind(this)
    }

    componentDidMount(){
        console.log(this.cbRef);
    }
    update(){
        console.log(this.cbRef.current.value);
    }
    
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef}></input>
                <input type="text" ref = {this.cbRef}></input>
                <button onClick={this.update}>click</button>
            </div>
        )
    }
}
