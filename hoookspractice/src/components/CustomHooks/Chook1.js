import React, { useState, useEffect } from 'react';

export default function Chook1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    },[count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}
