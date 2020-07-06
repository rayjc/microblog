import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import PostList from './PostList';


const Routes = () => (
  <Switch>
    <Route exact path="/new">
      <NewPostForm />
    </Route>
    <Route exact path="/posts/:id">
      <PostDetail />
    </Route>
    <Route exact path="/">
      <PostList />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;