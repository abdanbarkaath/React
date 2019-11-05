import React from 'react'
import './external.css'

export default function External(props) {
    let store = props.color?'primary':'';
    return (
        <div>
            <h1 className={`${store} fonts`}>External css applied</h1>
            <h1 className="fonts">css applied</h1>
        </div>
    )
}
