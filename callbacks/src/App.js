import "./App.css";
import Child from "./components/child";
import React, { useState, useCallback, useMemo } from "react";

function App() {
  const [parent, setParent] = useState(0);
  const [child, setChild] = useState(0);

  const updateParent = () => {
    setParent(parent + 1);
  };

  const updateChild = useCallback(() => {
    setChild(child + 1);
  }, [child]);

  const ChildMemo = useMemo(
    () => <Child child={child} updateChild={updateChild} />,
    [child, updateChild]
  );

  return (
    <div className="App">
      <button onClick={updateParent}>Update parent</button>
      <div>{parent}</div>
      {ChildMemo}
    </div>
  );
}

export default App;
