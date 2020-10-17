import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from './styles';

const Input = ({ action, placeholder }) => {
  return (
    <TextInput
      inputProps={{ 'data-testid': 'text-input' }}
      onChange={action}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  action: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
