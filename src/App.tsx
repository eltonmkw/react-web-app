import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h3>
          React Testing Course for Beginners – <b>Code and Test 3 Apps</b>
        </h3>
        <p>
          For video link,
          <a href="https://www.youtube.com/watch?v=8vfQ6SWBZ-U">click here</a>
        </p>
      </header>
    </div>
  );
}

export default App;
