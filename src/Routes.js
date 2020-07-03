import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Routes = () => (
  <Switch>
    <Route exact path="/new">
      <p>
        New Post Form
      </p>
    </Route>
    <Route exact path="/">
      <p>Home</p>
    </Route>
    <Redirect path="/" />
  </Switch>
)


export default Routes;