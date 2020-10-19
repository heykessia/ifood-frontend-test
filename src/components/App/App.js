import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { PlaylistsProvider } from '../../contexts/playlists-context';
import { FiltersProvider } from '../../contexts/filters-context';
import { theme } from '../../assets/theme/theme';

import Router from '../../router/Router';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <FiltersProvider>
          <PlaylistsProvider>
            <Router />
          </PlaylistsProvider>
        </FiltersProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
