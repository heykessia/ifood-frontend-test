import React from 'react';

import { AuthProvider } from '../../contexts/auth-context';
import { PlaylistsProvider } from '../../contexts/playlists-context';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/theme/theme';

import Router from '../../router/Router';

const App = () => {
  return (
    <AuthProvider>
      <StylesProvider injectFirst>
       <ThemeProvider theme={theme}>
          <PlaylistsProvider>
            <Router />
          </PlaylistsProvider>
        </ThemeProvider>
      </StylesProvider>
    </AuthProvider>
  );
}

export default App;
