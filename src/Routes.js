import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import PostList from './PostList';


const Routes = ({ posts, addPost, updatePost, removePost }) => (
  <Switch>
    <Route exact path="/new">
      <NewPostForm addPost={addPost} />
    </Route>
    <Route exact path="/posts/:id">
      <PostDetail posts={posts} updatePost={updatePost} removePost={removePost} />
    </Route>
    <Route exact path="/">
      <PostList posts={posts} />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;