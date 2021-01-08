import React from "react";

export default function Child2({ step, setCounter }) {
  // let's write the handlers for the setter function
  const inc = () => {setCounter(x => x + step); };
  const dec = () => {setCounter(x => x - step); };

  return (
    <p>
      <button onClick={inc}>+{step}</button>
      <button onClick={dec}>-{step}</button>
    </p>
    
  );
}
