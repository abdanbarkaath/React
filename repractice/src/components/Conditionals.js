import React, { Component } from 'react'

export default class Conditionals extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islog:false
        }
    }
    
    render() {
        let message;
        const{islog}=this.state;
        if(islog){
            message=<div>Hello user</div>
        }else{
            message=<div>Please login</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}
