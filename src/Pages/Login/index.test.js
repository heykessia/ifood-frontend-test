import React from 'react';
import { render, fireEvent } from '../../utils/test-utils/theme-provider-util';
import LoginPage from './index';

describe('Login page', () => {
  test('renders page', () => {
    const welcomeMessage = 'Welcome to Spotifood, please login to continue.';
    const { getByText } = render(<LoginPage />);
    const messageElement = getByText(welcomeMessage);

    expect(messageElement).toBeInTheDocument();
  });

  test('goes to spotify login', async () => {
    delete window.location;
    window.location = {
      port: '300',
      protocol: 'http:',
      hostname: 'spotify.com',
    };
    const { getByText, getByTestId } = render(<LoginPage />);
    const buttonElement = getByText('Login');

    fireEvent.click(buttonElement);
    const loadingElement = getByTestId('loading-circle');
    expect(loadingElement).toBeInTheDocument();
    expect(window.location.href).toMatch(/spotify.com/);
  });
});
