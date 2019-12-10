import React, { Component } from 'react'

export default class conditionals extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:false
        }
    }
    //different types of conditionals
    render() {
        //third type
        return this.loggedIn  ?
        (<div>Welcome Abdan</div>):
        (<div>Welcome guest</div>)
        
        //second type
        // let message;
        // if(this.loggedIn){
        //     message=<div>Welcome abdan</div>
        // }else{
        //     message=<div>Welcome guest</div>
        // }
        // return message;

        //first type
        // if(this.loggedIn){
        //     return <div>Welcome abdan</div>
        // }else{
        //     return <div>Welcome guest</div>
        // }
    }
}
