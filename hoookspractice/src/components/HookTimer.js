import React, { useState } from 'react'

export default function HookTimer() {
    let [count,setCount] = useState(0);

    function update(){
        let x = count +1
        setCount(x)
        console.log(x);
    }

    // setInterval(update,1000);


    return (
        <div>
            <h1>{count}</h1>     
            <button onClick={update}>update</button>   
        </div>
    )
}
