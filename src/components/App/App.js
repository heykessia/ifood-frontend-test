import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from '../Header/Header';

const App = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </MuiThemeProvider>
  );
}

export default App;
