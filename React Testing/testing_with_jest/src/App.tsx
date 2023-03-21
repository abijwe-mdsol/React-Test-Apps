import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetSecond from './components/greet-second/greet-second';
import Users from './components/users/users';

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
      </header>
      <GreetSecond name="Akash" />
      <Users />
    </div>
  );
}

export default App;
