import React, { useState, useEffect } from 'react'
import useStateWithCallback from 'use-state-with-callback';



export default function Hookeffect() {
    let [count,setCount] = useStateWithCallback(0,()=>{
        console.log("count updated")
    });
    let [name,setName] = useState("abdan");

    useEffect(()=>{
        console.log("update")
    },[name])

    return (
        <div>
            {count}
            <br></br>
            {name}
            <br></br>
            <input value={name} onChange={e=>setName(e.target.value)}></input>
            <button onClick={()=>setCount(prev=>prev+1)}>click me</button>
        </div>
    )
}
