import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';

import { AuthProvider } from '../../contexts/auth-context';
import Router from '../../router/Router';

const App = () => {
  return (
    <AuthProvider>
       <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </MuiThemeProvider>
    </AuthProvider>
  );
}

export default App;
