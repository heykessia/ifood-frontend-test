import React from 'react';
import {
  render,
  fireEvent,
} from '../../../utils/test-utils/theme-provider-util';
import Button from './index';

describe('Button component', () => {
  test('renders button', () => {
    const label = 'Test';

    const { getByText } = render(<Button label={label} />);
    const buttonElement = getByText(label);

    expect(buttonElement).toBeInTheDocument();
  });

  test('calls function on click', () => {
    const label = 'Test';
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button onClick={handleClick} label={label} />
    );
    const buttonElement = getByText(label);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
