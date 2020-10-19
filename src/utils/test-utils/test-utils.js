import React from 'react';
import { render } from './theme-provider-util';
import { AuthProvider } from '../../contexts/auth-context';
import { PlaylistsProvider } from '../../contexts/playlists-context';
import { FiltersProvider } from '../../contexts/filters-context';

export const renderAuthProvider = ({ children, auth }) => {
  return render(<AuthProvider value={auth}>{children}</AuthProvider>);
};

export const renderPlaylistsProviders = ({ children }) => {
  return render(
    <FiltersProvider>
      <PlaylistsProvider>{children}</PlaylistsProvider>
    </FiltersProvider>
  );
};
