import React, { Component } from 'react'

export default class ListRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:["bike","car","train","plane","cycle",]
        }
    }
    
    render() {
        let item;
        const{items}=this.state;
        item = items.map((val,index)=><ul>
            <li>{val}</li>
        </ul>)
        return (
            <div>
                {item}
            </div>
        )
    }
}
