import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Playlists from './index';

import { responseMock } from '../../utils/test-utils/mocks/response-mock';

describe('Playlist component', () => {
  test('renders with playlists', () => {
    const playlists = responseMock.data.playlists.items;
    const firstPlaylist = playlists[0].name;

    const { getByTestId } = render(<Playlists playlists={playlists} />);
    const imageElement = getByTestId(firstPlaylist);

    expect(imageElement).toBeInTheDocument();
  });

  test('does not render without playlists', async () => {
    const { queryByTestId } = render(<Playlists />);

    expect(queryByTestId('card-container')).not.toBeInTheDocument();
  });
});
