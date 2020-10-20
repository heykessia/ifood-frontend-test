import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '../../utils/test-utils/theme-provider-util';
import ErrorPage from './index';

describe('Error Page', () => {
  test('renders page', () => {
    const { getByText } = render(<ErrorPage />);
    const buttonElement = getByText('Back');

    expect(buttonElement).toBeInTheDocument();
  });

  test('goes to home page', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    const { getByText } = render(
      <Router history={historyMock}>
        <ErrorPage />
      </Router>
    );
    const buttonElement = getByText('Back');
    fireEvent.click(buttonElement);

    expect(historyMock.push).toHaveBeenCalledWith('/');
  });
});
