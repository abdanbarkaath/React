import React from 'react'
import {UserContext} from '../../App'

export default function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    value=>{
                        return <h1>User name is {value}</h1>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
