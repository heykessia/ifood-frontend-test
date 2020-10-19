import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
} from '../../utils/test-utils/theme-provider-util';
import Playlist from './Playlist';

import { playlistMock } from '../../utils/test-utils/mocks/playlist-mock';

describe('Playlist component', () => {
  test('renders with playlist', () => {
    const { getByTestId } = render(<Playlist playlist={playlistMock} />);
    const imageElement = getByTestId(playlistMock.name);

    expect(imageElement).toBeInTheDocument();
  });

  test('does not render without playlist', async () => {
    const { queryByTestId } = render(<Playlist />);

    expect(queryByTestId('card-container')).not.toBeInTheDocument();
  });

  test('should go to spotify playlist', () => {
    global.open = jest.fn();
    const { getByTestId } = render(<Playlist playlist={playlistMock} />);
    const imageElement = getByTestId(playlistMock.name);

    fireEvent.click(imageElement);
    expect(global.open).toHaveBeenCalled();
  });
});
