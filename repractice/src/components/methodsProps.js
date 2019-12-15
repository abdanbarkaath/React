import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class methodsProps extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentWillMount(){
        this.props.greetHandler('turab')
    }
    
    render() {
        return (
            <div>
                <Button onClick={()=>this.props.greetHandler()}>Hello parent</Button>
            </div>
        )
    }
}
