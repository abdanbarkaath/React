import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class child1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abdan"
        }

    }
    
    changename(){
        this.setState({
            name:"ahha"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button  variant="primary" onClick="changename">click me to change the name</button>
            </div>
        )
    }
}
