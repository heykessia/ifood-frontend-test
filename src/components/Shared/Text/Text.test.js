import React from 'react';
import { render } from '../../../utils/test-utils/theme-provider-util';
import Text from './Text';

describe('Text component', () => {
  test('renders message', () => {
    const message =
      'Sorry, an error occured while getting the playlists from Spotify.';

    const { getByText } = render(<Text text={message} />);
    const messageElement = getByText(message);

    expect(messageElement).toBeInTheDocument();
  });
});
