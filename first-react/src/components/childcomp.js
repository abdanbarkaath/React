import React, { Component } from 'react'

export default class childcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.props.childHandler('abdan')}>click me</button>
            </div>
        )
    }
}
