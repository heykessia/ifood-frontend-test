import React from 'react';
import { render } from '../../utils/test-utils';
import Header from './Header';

test('renders title', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/spotifood/i);
  expect(linkElement).toBeInTheDocument();
});
