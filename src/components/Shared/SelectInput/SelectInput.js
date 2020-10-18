import React from 'react';
import PropTypes from 'prop-types';
import { Select, SelectOption, FormContainer, Label } from './styles';
import { NONE } from '../../../utils/constants/constants';

const SelectInput = ({ id, name, values, action, selected }) => {
  return (
    <FormContainer>
      <Label id={id}>{name}</Label>
      <Select
        value={selected}
        labelId={id}
        onChange={(params) =>
          action({
            field: id,
            value: params.target.value,
          })
        }
      >
        <SelectOption value="">-</SelectOption>;
        {values &&
          values.map((option) => (
            <SelectOption key={option.value} value={option.value}>
              {option.name}
            </SelectOption>
          ))}
      </Select>
    </FormContainer>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.array,
  action: PropTypes.func,
  selected: PropTypes.string,
};

export default SelectInput;
