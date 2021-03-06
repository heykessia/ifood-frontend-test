import React from 'react';
import {
  render,
  fireEvent,
} from '../../../utils/test-utils/theme-provider-util';
import SearchInput from './index';

describe('Input component', () => {
  test('renders input', () => {
    const { getByTestId } = render(<SearchInput />);
    const inputElement = getByTestId('text-input');

    expect(inputElement).toBeInTheDocument();
  });

  test('calls function on change', () => {
    const searchText = 'playlist one';
    const placeholder = 'Test';
    const action = jest.fn();

    const { getByTestId, getByText } = render(
      <SearchInput action={action} placeholder={placeholder} />
    );

    const inputElement = getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: searchText } });

    expect(inputElement.value).toEqual(searchText);
    expect(action).toHaveBeenCalled();
  });
});
