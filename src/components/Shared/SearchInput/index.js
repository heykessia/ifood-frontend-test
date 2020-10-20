import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, IconContainer, Search } from './styles';

const SearchInput = ({ action, placeholder, value }) => {
  return (
    <TextInput
      fullWidth
      inputProps={{ 'data-testid': 'text-input' }}
      placeholder={placeholder}
      value={value}
      onChange={action}
      startAdornment={
        <IconContainer position="start">
          <Search />
        </IconContainer>
      }
    />
  );
};

SearchInput.propTypes = {
  action: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchInput;
