import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewPostForm from './NewPostForm';


const Routes = ({ posts, addPost }) => (
  <Switch>
    <Route exact path="/new">
      <NewPostForm addPost={addPost} />
    </Route>
    <Route exact path="/">
      <p>Home</p>
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;