import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PlaylistsPage from '../Pages/Playlists/Playlists';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Authentication from '../Pages/Authentication/Authentication';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PlaylistsPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/authentication" component={Authentication} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
