import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PRIMO DEPLOY SU CLOUD AWS AMAZON!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Applicazione serverless con Front End React e Back End Java Sprind (DB Amazon DynamoDB)
        </a>
      </header>
    </div>
  );
}

export default App;
