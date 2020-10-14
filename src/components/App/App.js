import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
