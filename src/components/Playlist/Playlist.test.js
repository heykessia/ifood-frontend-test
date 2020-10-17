import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Playlist from './Playlist';

import { playlistMock } from '../../utils/test-utils/mocks/playlist-mock';

describe('Playlist component', () => {
  test('renders with playlist', () => {

    const { getByTestId } = render(<Playlist playlist={playlistMock} />);
    const imageElement = getByTestId(playlistMock.name);
    
    expect(imageElement).toBeInTheDocument();
  });
})
