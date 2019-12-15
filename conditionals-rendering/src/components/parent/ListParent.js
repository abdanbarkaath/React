import React, { Component } from 'react'
import ListChild from '../child/ListChild'

export default class ListParent extends Component {

    render() {
        let users =[{name:"abdan",age:21},{name:"qadeer",age:20},{name:"turab",age:28},{name:"basil",age:56},]
        let showUser = users.map((val,index)=><ListChild key={index} user={val}></ListChild>)
        // let user = users.map((val)=><ul><li>{val.name} and {val.age}</li></ul>)
        return (
            <div>
                {showUser}
            </div>
        )
    }
}
