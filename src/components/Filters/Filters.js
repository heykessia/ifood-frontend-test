import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import { Grid, Title } from './styles';

const Filters = ({ filters, activeFilters, updateFilters }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Title>Filters</Title>
      </Grid>
      {filters.length > 0 &&
        filters.map((filter) => (
          <Grid item xs={12} sm={6} md={4} key={filter.id}>
            <Filter
              filter={filter}
              action={updateFilters}
              selected={activeFilters[filter.id]}
            />
          </Grid>
        ))}
    </Grid>
  );
};

Filters.propTypes = {
  filters: PropTypes.array,
  activeFilters: PropTypes.object,
  updateFilters: PropTypes.func,
};

export default Filters;
