import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders logo', () => {
    const { getByAltText } = render(<App />);

    const linkElement = getByAltText(/IFood Logo/i);

    expect(linkElement).toBeInTheDocument();
  });
});
