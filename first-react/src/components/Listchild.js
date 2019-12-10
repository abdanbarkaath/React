import React from 'react'

function Listchild({peep}) {
    return (
        <div>
            <ul>
                <li>
                    <p>{peep.name}and age = {peep.age}</p>
                </li>
            </ul>
        </div>
    )
}

export default Listchild