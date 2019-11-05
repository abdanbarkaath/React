import React, { Component } from 'react'

export default class check extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:12
        }
        // this.update = this.update.bind(this)
    }
    
    update(){
        console.log("check");
    }
    render() {
        return (
            <div>
                <button onClick={()=>{return this.update;}}> sad</button>
            </div>
        )
    }
}
