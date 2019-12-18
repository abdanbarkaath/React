import React, { useState } from "react";
import useStateWithCallback from "use-state-with-callback";
export default function Hook2() {
  let [count, setCount] = useStateWithCallback(0, () => console.log(count));
  function update() {
    let temp = count + 1;
    setCount(temp);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => update()}>Click me</button>
    </div>
  );
}
