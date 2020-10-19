import React from 'react';
import axios from 'axios';
import {
  render,
  waitForElement,
} from '../../utils/test-utils/theme-provider-util';
import PlaylistsPage from './Playlists';

import { getPlaylists } from '../../services/spotify';
import { getFilters } from '../../services/filters';
import { responseMock } from '../../utils/test-utils/mocks/response-mock';
import { filtersMock } from '../../utils/test-utils/mocks/filtersMock';

jest.mock('../../services/spotify');
jest.mock('../../services/filters');

describe('Playlist component', () => {
  test('renders with playlists', async () => {
    getPlaylists.mockResolvedValue(responseMock);
    getFilters.mockResolvedValue(filtersMock);

    const playlists = responseMock.data.playlists.items;
    const firstPlaylist = playlists[0].name;

    const { getByTestId } = render(<PlaylistsPage />);

    const playlistImage = await waitForElement(() =>
      getByTestId(firstPlaylist)
    );

    expect(playlistImage).toBeInTheDocument();
  });
});
