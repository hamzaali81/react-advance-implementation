import React from 'react';
// import logo from './logo.svg';
import './App.css';
//stateless functional component
//class based components
//state, life cycle methods
//React hooks
//Classes - Syntactical sugar for constructor functions
//subclass of Component
//extends from Component class
//inherits functionality
//Component class is used to transfer from basic ES6 class.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      </header>
    </div>
  );
}

export default App;
