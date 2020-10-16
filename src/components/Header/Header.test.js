import React from 'react';
import { render } from '../../utils/testUtils/theme-provider-util';
import Header from './Header';

test('renders title', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/spotifood/i);
  expect(linkElement).toBeInTheDocument();
});
