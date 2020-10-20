import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '../../utils/test-utils/theme-provider-util';
import Authentication from './index';

describe('Authentication page', () => {
  test('renders page', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const { getByTestId } = render(
      <Router history={historyMock}>
        <Authentication />
      </Router>
    );

    const loadingElement = getByTestId('loading-circle');
    expect(loadingElement).toBeInTheDocument();
  });

  test('goes to login page', async () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    render(
      <Router history={historyMock}>
        <Authentication />
      </Router>
    );

    expect(historyMock.push).toHaveBeenCalledWith('/login');
  });

  test('goes to home page', async () => {
    const hash =
      '#access_token=someTestingToken&token_type=Bearer&expires_in=3600';
    window.location.hash = hash;
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    render(
      <Router history={historyMock}>
        <Authentication />
      </Router>
    );

    expect(historyMock.push).toHaveBeenCalledWith('/');
  });
});
