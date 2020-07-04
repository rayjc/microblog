import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  const [posts, setPosts] = useState([{
    id: "something", title: "test", overview: "test", body: "asdf;lajlkjl;kjsadf"
  }]);

  const addPost = (post) => {
    setPosts(p => [...p, post]);
  }

  const removePost = (id) => {
    setPosts(p => p.filter(post => post.id !== id));
  }

  const updatePost = (post) => {
    setPosts(posts => posts.reduce((posts, currPost) => {
      if (currPost.id === post.id) {
        posts.push({ ...post });
      } else {
        posts.push({ ...currPost });
      }
      return posts;
    }, []))
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Routes posts={posts} addPost={addPost} updatePost={updatePost} removePost={removePost}/>
      </div>
    </div>
  );
}

export default App;