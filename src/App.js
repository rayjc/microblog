import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts(p => [...p, post]);
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Routes posts={posts} addPost={addPost} />
      </div>
    </div>
  );
}

export default App;