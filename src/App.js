import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Child.js";
import Child2 from "./Child2";


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const username = "ss153g";
  const todos = ["buy groceries", "do something else", "new element"];
  // const counter = 0;
  // #2 ~ 3:50 mark
  // useState returns 2 components -> variable + setter function
  // to change the variable, you don't change the variable but instead
  // use the setter function, which triggers auto updates
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
      </header>
      <h1>Part 1: Rendering</h1>
      <h2>Start editing to see some magic happen!</h2>
      {username ? <h3>Hello, {username}</h3> : <h3>No username</h3>}
      {username && <p>Logout</p>}
      <ul>
        Map function takes a function which gives it each element of the array
        as an argument
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <hr />
      <h1>Part 2: The State Hook</h1>
      <h2>Counter: {counter}</h2>
      {/* <p>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </p> */}
      <hr />
      <h1>Part 3: Sub-Components</h1>
      <h2>Counter: {counter}</h2>
      <Child step={1} counter={counter} setCounter={setCounter} />
      <Child step={5} counter={counter} setCounter={setCounter} />
      <hr />
      <h1>Part 3x: Sub-Components</h1>
      <h2>Counter: {counter}</h2>
      <h3><i>Less props passed to components</i></h3>
      <Child2 step={1} setCounter={setCounter} />
      <Child2 step={5} setCounter={setCounter} />
      <p><i>All React component names must start with a capital letter.
      If you start a component name with a lowercase letter,
      it will be treated like a built-in element like a 
      div or a span. This is because of the way JSX works. 
      In JSX, rendering a component that begins with a lowercase letter 
      compiles down to React.</i></p>
      <hr />
      <h1>Part 4: The Effect Hook</h1>
    </div>
  );
}

export default App;
