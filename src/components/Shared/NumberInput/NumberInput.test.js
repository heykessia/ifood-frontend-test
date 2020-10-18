import React from 'react';
import { render } from '../../../utils/test-utils/theme-provider-util';
import NumberInput from './NumberInput';

describe('Number Input component', () => {
  test('renders input', () => {
    const filter = {
      name: 'Test Option',
      id: 'test-option',
      validation: { min: 1, max: 10 },
    };

    const action = jest.fn();

    const { getByText } = render(
      <NumberInput
        id={filter.id}
        name={filter.name}
        validation={filter.validation}
        action={action}
        selected=""
      />
    );
    const labelElement = getByText(filter.name);

    expect(labelElement).toBeInTheDocument();
  });
});
