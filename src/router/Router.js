import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Playlists from '../pages/Playlists/Playlists'
import Login from '../pages/Login/Login'

const Router = () => (
  <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Playlists} />
      <Route exact path="/login" component={Login} />
      </Switch>
  </BrowserRouter>
);

export default Router;