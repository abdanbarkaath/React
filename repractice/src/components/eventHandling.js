import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class eventHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:"kansdjksand"
        }
    }
    

    eventTrigger=(e)=>{
        this.setState({
            value:e.target.textContent,
        })
        console.log(e.target.textContent);
    }
    render() {
        const {value} = this.state;
        return (
            <div>
                <h1>{value}</h1>
                <Button onClick={this.eventTrigger}>Click me</Button>
            </div>
        )
    }
}
