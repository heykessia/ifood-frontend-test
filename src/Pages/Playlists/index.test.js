import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
} from '../../utils/test-utils/theme-provider-util';
import PlaylistsPage from './index';

import { getPlaylists } from '../../services/spotify';
import { getFilters } from '../../services/filters';
import { responseMock } from '../../utils/test-utils/mocks/response-mock';
import { filtersMock } from '../../utils/test-utils/mocks/filtersMock';

jest.mock('../../services/spotify');
jest.mock('../../services/filters');

describe('Playlist Page', () => {
  test('renders with playlists', async () => {
    getPlaylists.mockResolvedValue(responseMock);
    getFilters.mockResolvedValue(filtersMock);

    const playlists = responseMock.data.playlists.items;
    const firstPlaylist = playlists[0].name;

    const { getByTestId, getAllByTestId } = render(<PlaylistsPage />);

    const loadingElement = getAllByTestId('loading-circle');
    expect(loadingElement.length).toEqual(2);
    await waitForElementToBeRemoved(() => getAllByTestId('loading-circle'));

    const playlistImage = await waitForElement(() =>
      getByTestId(firstPlaylist)
    );

    expect(playlistImage).toBeInTheDocument();
  });

  test('select a playlist', async () => {
    global.open = jest.fn();
    getPlaylists.mockResolvedValue(responseMock);
    getFilters.mockResolvedValue(filtersMock);

    const playlists = responseMock.data.playlists.items;
    const firstPlaylist = playlists[0].name;

    const { getByTestId, getAllByTestId } = render(<PlaylistsPage />);

    const playlistImage = await waitForElement(() =>
      getByTestId(firstPlaylist)
    );

    fireEvent.click(playlistImage);

    expect(global.open).toHaveBeenCalled();
  });

  test('search a playlist', async () => {
    const response = responseMock;
    response.data.playlists.items[0].name = 'Test Playlist';

    getPlaylists.mockResolvedValue(response);
    getFilters.mockResolvedValue(filtersMock);

    const firstPlaylist = response.data.playlists.items[0].name;

    const { getByTestId, getAllByTestId } = render(<PlaylistsPage />);

    const playlistsCard = await waitForElement(() =>
      getAllByTestId('card-container')
    );

    expect(playlistsCard.length).toEqual(response.data.playlists.items.length);

    const searchInput = getByTestId('text-input');
    fireEvent.change(searchInput, { target: { value: 'Test Playlist' } });

    const searchedPlaylists = await waitForElement(() =>
      getAllByTestId('card-container')
    );

    expect(searchedPlaylists.length).toEqual(1);
  });

  test('renders error message', async () => {
    const errorMessage =
      'Sorry, an error occured while getting the playlists from Spotify.';
    const playlistsError = {
      response: {
        data: {
          error: {
            message: "There's a test error",
          },
        },
      },
    };

    getPlaylists.mockRejectedValue(playlistsError);
    getFilters.mockResolvedValue(filtersMock);

    const { getByText, getAllByTestId } = render(<PlaylistsPage />);

    const loadingElement = getAllByTestId('loading-circle');
    expect(loadingElement.length).toEqual(2);
    await waitForElementToBeRemoved(() => getAllByTestId('loading-circle'));

    const message = await waitForElement(() => getByText(errorMessage));

    expect(message).toBeInTheDocument();
  });
});
