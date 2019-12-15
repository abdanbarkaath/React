import React from 'react'

export default function ListChild(props) {
    return (
        <div>
            hi {props.user.name} your age is {props.user.age}
        </div>
    )
}
