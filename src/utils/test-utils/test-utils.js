import React from 'react';
import { render } from './theme-provider-util';
import { PlaylistsProvider } from '../../contexts/playlists-context';
import { FiltersProvider } from '../../contexts/filters-context';

export const renderPlaylistsProviders = ({ children }) => {
  return render(
    <FiltersProvider>
      <PlaylistsProvider>{children}</PlaylistsProvider>
    </FiltersProvider>
  );
};
