import React from 'react'

function Click() {
    function clickhandler(){
        console.log("second click");
    }
    return (
        <div>
            <h4>This is original text</h4>
            <button onClick={clickhandler}>Click me</button>
        </div>
    )
}

export default Click
