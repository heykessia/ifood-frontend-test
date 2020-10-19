import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { PlaylistsProvider } from '../../contexts/playlists-context';
import { FiltersProvider } from '../../contexts/filters-context';
import { theme } from '../../assets/theme/theme';

const AllTheProviders = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <FiltersProvider>
          <PlaylistsProvider>{children}</PlaylistsProvider>
        </FiltersProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

AllTheProviders.propTypes = {
  children: PropTypes.node,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
