import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, FormContainer } from './styles';

const NumberInput = ({ id, name, action, selected }) => {
  return (
    <FormContainer>
      <DatePicker
        type="date"
        value={selected}
        label={name}
        onChange={(params) =>
          action({
            field: id,
            value: params.target.value,
          })
        }
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
