import React from 'react';
import { render } from '../../../utils/test-utils/theme-provider-util';
import SelectInput from './index';

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
        selected=""
      />
    );

    const labelElement = getByLabelText(filter.name);
    expect(labelElement).toBeInTheDocument();
  });
});
