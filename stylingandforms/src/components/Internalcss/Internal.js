import React from 'react'

let heading={
    fontWeight:'100',
    color:'red',
    
}
let val =["abdan","basil","turab"]
export default function Internal(props) {
    return (
        <div>
            <h1 style={heading}>Hello Internal css</h1>
            <h1>{val}</h1>
            <p>{props.childComp}</p>
        </div>
    )
}
