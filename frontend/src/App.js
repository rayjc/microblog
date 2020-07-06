import React, { useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';
import PostApi from './api/PostApi';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      console.log(await PostApi.getPosts());
    }
    fetchData();
  })
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