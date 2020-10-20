import React from 'react';
import { render, fireEvent } from '../../utils/test-utils/theme-provider-util';
import Message from './index';

describe('Message component', () => {
  test('renders message elements', () => {
    const text = 'Testing message';
    const action = jest.fn();
    const actionLabel = 'Action';

    const { getByText } = render(
      <Message text={text} action={action} actionLabel={actionLabel} />
    );
    const textElement = getByText(text);
    const buttonElement = getByText(actionLabel);

    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('call button action', () => {
    const text = 'Testing message';
    const action = jest.fn();
    const actionLabel = 'Action';

    const { getByText } = render(
      <Message text={text} action={action} actionLabel={actionLabel} />
    );
    const buttonElement = getByText(actionLabel);

    fireEvent.click(buttonElement);

    expect(action).toHaveBeenCalled();
  });
});
