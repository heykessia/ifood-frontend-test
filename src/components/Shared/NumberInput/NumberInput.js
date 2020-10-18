import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, FormContainer } from './styles';

const NumberInput = ({ id, name, validation, action, selected }) => {
  return (
    <FormContainer>
      <TextInput
        type="number"
        value={selected}
        label={name}
        onChange={(params) =>
          action({
            field: id,
            value: params.target.value,
          })
        }
        InputProps={{
          inputProps: {
            min: validation.min,
            max: validation.max,
          },
        }}
      />
    </FormContainer>
  );
};

NumberInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  validation: PropTypes.object,
  action: PropTypes.func,
  selected: PropTypes.string,
};

export default NumberInput;
