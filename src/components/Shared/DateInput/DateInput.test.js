import React from 'react';
import { render } from '../../../utils/test-utils/theme-provider-util';
import DateInput from './DateInput';

describe('Date Input component', () => {
  test('renders input', () => {
    const filter = {
      name: 'Test Option',
      id: 'test-option',
    };

    const action = jest.fn();

    const { getByText } = render(
      <DateInput
        id={filter.id}
        name={filter.name}
        action={action}
        selected=""
      />
    );
    const labelElement = getByText(filter.name);

    expect(labelElement).toBeInTheDocument();
  });
});
