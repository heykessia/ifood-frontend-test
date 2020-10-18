import React from 'react';
import { render } from '../../../utils/test-utils/theme-provider-util';
import SelectInput from './SelectInput';

describe('Select Input component', () => {
  test('renders select', () => {
    const filter = {
      name: 'Test Option',
      id: 'test-option',
      values: [{ name: 'Option 1', value: 'option-1' }],
    };

    const action = jest.fn();

    const { getByLabelText, getByText } = render(
      <SelectInput
        id={filter.id}
        name={filter.name}
        values={filter.values}
        action={action}
        selected="none"
      />
    );
    const labelElement = getByLabelText(filter.name);
    const selectElement = getByText('None');

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });
});
