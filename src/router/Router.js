import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Playlists from '../pages/Playlists/Playlists'
import Login from '../pages/Login/Login'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Authentication from '../pages/Authentication/Authentication'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Playlists} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/authentication" component={Authentication} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;