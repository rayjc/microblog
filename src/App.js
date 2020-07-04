import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  const [posts, setPosts] = useState([{
    id: "something", title: "test", overview: "test",
    body: "Duis laborum dolor et labore velit fugiat qui amet Lorem tempor incididunt nulla. Occaecat minim excepteur excepteur mollit laborum deserunt aute irure Lorem elit et. Anim et do do nulla velit ea est eu. Esse veniam incididunt fugiat proident deserunt. Veniam mollit mollit aliquip velit pariatur. Amet aliqua exercitation aliquip eiusmod dolore exercitation consequat enim laborum quis magna.",
  }]);
  const [comments, setComments] = useState({
    something: ["commen1", "Consectetur consequat cupidatat quis pariatur Lorem sint culpa aliquip ullamco."]
  });

  const addPost = (post) => {
    setPosts(p => [...p, post]);
    setComments(c => ({ ...c, [post.id]: [] }));
  }

  const removePost = (id) => {
    setPosts(p => p.filter(post => post.id !== id));
    const { [id]: _, ...remaining } = comments;
    setComments(c => ({ ...remaining }));
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

  const addComment = (postId, comment) => {
    const oldComments = comments[postId];
    setComments(c => ({ ...c, [postId]: [...oldComments, comment] }));
  }

  const removeComment = (postId, targetIdx) => {
    const postComments = comments[postId];
    setComments(c => ({
      ...c,
      [postId]: postComments.filter((comment, idx) => idx !== targetIdx)
    }));
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Routes posts={posts} addPost={addPost} updatePost={updatePost} removePost={removePost}
          comments={comments} addComment={addComment} removeComment={removeComment} />
      </div>
    </div>
  );
}

export default App;