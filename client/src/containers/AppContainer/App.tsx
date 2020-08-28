import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './components/logo.svg';
import './App.css';
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
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
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
