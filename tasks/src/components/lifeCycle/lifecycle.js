import React, { Component } from 'react'

export default class lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abdan"
        }
        this.change = this.change.bind(this)
    console.log("constructor");
    }
    change(){
        this.setState({
            name:"basil"
        })
    }
    componentDidMount(){
        console.log("Did Mount===========");
    }
    // componentWillMount(){
    //     console.log("will Mount");
    // }
    static getDerivedStateFromProps(props,state){
        console.log("Derived state");
        return null
    }
    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }
    componentDidUpdate(){
        console.log("did Update");
    }
    componentWillUnmount(){
        console.log("will unmount");
    }
    getSnapshotBeforeUpdate(){
        console.log("shot before update");
        return null;
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change}>click me</button>
            </div>
        )
    }
}

