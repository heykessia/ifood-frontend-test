import React from 'react';
import { render } from '../../utils/test-utils/theme-provider-util';
import Filters from './Filters';

describe('Filters component', () => {
  test('renders Filters', () => {
    const filters = [
      {
        id: 'locale',
        name: 'Filter Test',
        values: [{ id: 'country-test', value: 'Country Test' }],
      },
    ];
    const activeFilters = {
      locale: '',
    };
    const updateFilter = jest.fn();

    const { getByText } = render(
      <Filters
        filters={filters}
        activeFilters={activeFilters}
        updateFilter={updateFilter}
      />
    );
    const filterElement = getByText(filters[0].name);

    expect(filterElement).toBeInTheDocument();
  });
});
