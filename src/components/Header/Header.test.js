import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Header from './Header';

describe('Header component', () => {
  test('renders title', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText(/spotifood/i);

    expect(headerElement).toBeInTheDocument();
  });
});
