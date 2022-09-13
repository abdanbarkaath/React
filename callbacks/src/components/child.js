import React, { useEffect, useMemo } from "react";

function Child({ child, updateChild }) {
  useEffect(() => {
    console.log("child triggered");
  }, [updateChild]);

  console.log("child rendered", child);

  return (
    <div className="App">
      <button onClick={updateChild}>Update child</button>
      <div>{child}</div>
    </div>
  );
}

const getMessage = (child) => {
  return `total childs ${child}`;
};

export default Child;
