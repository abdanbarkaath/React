import React, { useState } from 'react'

export default function Hook1() {
    const [count,setCount] = useState(0);
    function update(){
        let temp = count + 1;
        console.log(count);
        setCount(temp,()=>console.log("hello"))
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>update()}>Click me</button>
        </div>
    )
}
