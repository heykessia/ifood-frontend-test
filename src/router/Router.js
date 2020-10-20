import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PlaylistsPage from '../Pages/Playlists/Playlists';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Authentication from '../Pages/Authentication/Authentication';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={PlaylistsPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/authentication" component={Authentication} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
