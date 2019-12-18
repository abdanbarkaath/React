import React, { useState } from 'react'

export default function Hookobj() {
    let [user,setUser] = useState({name:"abdan",age:23})

    function update(e){
        let temp = {...user}
        temp.name = e.target.value
        setUser(temp)
    }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <input value={user.name} onChange={update}></input>
            {/* <button onClick={newName}>Update</button> */}
        </div>
    )
}
