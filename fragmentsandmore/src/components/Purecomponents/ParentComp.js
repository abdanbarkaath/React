import React, { Component } from 'react'
import PureaComponent from './PureaComponent'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abdan"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            console.log("updates");
            this.setState({
                name:"Turab"
            })
        },1000)
    }
    
    render() {
        return (
            <div>
                <PureaComponent setname= {this.state.name}></PureaComponent>
            </div>
        )
    }
}
