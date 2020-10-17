import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Error from './Error';

describe('Error component', () => {
  test('renders error message', () => {
    const errorMessage = 'Sorry, an error occured while getting the playlists from Spotify.'

    const { getByText } = render(<Error />);
    const messageElement = getByText(errorMessage);

    expect(messageElement).toBeInTheDocument();
  });
})
