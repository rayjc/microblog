import React from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;