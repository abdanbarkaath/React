import React from 'react'
import useStateWithCallback from "use-state-with-callback";

export default function HookInput() {
    let [name,setName] = useStateWithCallback('',()=>{
        if(name==="abdan"){
            console.log("yes can login ");
        }else{
            console.log("wrong username or password");
        }
    })
    function newname(e){
        setName(e.target.value)
    }
    return (
        <div>
            <input value={name} onChange={newname}></input>
        </div>
    )
}
