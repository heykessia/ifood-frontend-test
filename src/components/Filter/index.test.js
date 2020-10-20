import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Filter from './index';

describe('Filter component', () => {
  test('renders Filter', () => {
    const filter = {
      id: 'locale',
      name: 'Filter Test',
      values: [{ id: 'country-test', value: 'Country Test' }],
    };
    const action = jest.fn();
    const selected = '';

    const { getByText } = render(
      <Filter filter={filter} action={action} selected={selected} />
    );
    const filterElement = getByText(filter.name);

    expect(filterElement).toBeInTheDocument();
  });
});
