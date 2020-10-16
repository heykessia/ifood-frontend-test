import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/theme/theme';

import { AuthProvider } from '../../contexts/auth-context';
import Router from '../../router/Router';

const App = () => {
  return (
    <AuthProvider>
      <StylesProvider injectFirst>
       <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
        </StylesProvider>
    </AuthProvider>
  );
}

export default App;
