import React, { useState, useEffect } from 'react'

export default function HookTimer() {
    let [count,setCount] = useState(0);

    function update(){
        let x = count +1
        setCount(x)
        console.log(count);
    }

    useEffect(()=>{
        console.log("updated");
        const interval =  setTimeout(update,1000);
        // return()=>{
        //     clearInterval(interval)
        // }
    },[count])


    return (
        <div>
            <h1>{count}</h1>     
            <button onClick={update}>update</button>   
        </div>
    )
}
