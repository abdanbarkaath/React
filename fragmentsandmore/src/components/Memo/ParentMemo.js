import React, { Component } from 'react'
import Memo from './Memo'

export default class ParentMemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abdan"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"turab"
            })
        },1000)
    }
    render() {
        console.log("update parent");
        return (
            <div>
                <Memo setname = {this.state.name}></Memo>
            </div>
        )
    }
}
