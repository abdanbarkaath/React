import React, { Component } from 'react'


export default function Func(props) {
    let x = props.name;
    return (
        <div>
            <input type="text" value = {props.name} onChange={props.update} ></input>
            <button onClick={props.run(x)}>click me</button>
        </div>
    )
}

