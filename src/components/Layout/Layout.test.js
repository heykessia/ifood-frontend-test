import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Layout from './Layout';

describe('Layout component', () => {
  test('renders layout', () => {
    const { getByAltText } = render(<Layout />);
    const logoElement = getByAltText('IFood Logo');

    expect(logoElement).toBeInTheDocument();
  });
});
