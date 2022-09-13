import React, { useState } from 'react';
import MainCustomHook from './MainCustomHook';
export default function Chook2() {
    const [count, setCount] = useState(0);
    
    MainCustomHook(count);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}
