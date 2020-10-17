import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Loading from './Loading';

describe('Loading component', () => {
  test('renders loading', () => {
    const { getByTestId } = render(<Loading />);
    const loadingElement = getByTestId('loading-circle');

    expect(loadingElement).toBeInTheDocument();
  });
});
