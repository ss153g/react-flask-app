import React from "react";

export default function Child({ step, counter, setCounter }) {
  // let's write the handlers for the setter function
  const inc = () => {setCounter(counter + step); };
  const dec = () => {setCounter(counter - step); };

  return (
    <p>
      <button onClick={inc}>+{step}</button>
      <button onClick={dec}>-{step}</button>
    </p>
  );
}
