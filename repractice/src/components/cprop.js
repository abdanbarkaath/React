import React, { Component } from 'react'
import { Button } from '@material-ui/core'


export default class cprop extends Component {
    
    render() {
        return (
            <div>
                <h1>my name is {this.props.userName}</h1>
                <Button  variant="outlined" color="primary">click me</Button>
            </div>
        )
    }
}
