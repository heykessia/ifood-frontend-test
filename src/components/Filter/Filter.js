import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../Shared/SelectInput/SelectInput';
import NumberInput from '../Shared/NumberInput/NumberInput';
import DateInput from '../Shared/DateInput/DateInput';

const Filter = ({ filter, action, selected }) => {
  const inputTypes = {
    locale: SelectInput,
    country: SelectInput,
    timestamp: DateInput,
    limit: NumberInput,
    offset: NumberInput,
  };

  const FilterInput = inputTypes[filter.id] || 'div';

  return (
    <FilterInput
      id={filter.id}
      name={filter.name}
      values={filter.values}
      validation={filter.validation}
      action={action}
      selected={selected}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.object,
  action: PropTypes.func,
  selected: PropTypes.string,
};

export default Filter;
