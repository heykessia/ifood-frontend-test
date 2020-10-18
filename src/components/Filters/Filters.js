import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiltersContext, fetchFilters } from '../../contexts/filters-context';
import Filter from '../Filter/Filter';
import { Paper, Container } from './styles';
import Loading from '../Loading/Loading';

const Filters = () => {
  const { state, dispatch } = useContext(FiltersContext);

  const updateFilters = ({ field, value }) => {
    dispatch({ type: 'UPDATE_ACTIVE_FILTERS', payload: { [field]: value } });
  };

  const selectedFilter = (id) => {
    return state.activeFilters[id];
  };

  useEffect(() => {
    fetchFilters(dispatch);
  }, [dispatch]);

  return (
    <Paper>
      <Container>
        {state.loading ? (
          <Loading />
        ) : (
          state.filters.length > 0 &&
          state.filters.map((filter) => (
            <Filter
              key={filter.id}
              filter={filter}
              action={updateFilters}
              selected={selectedFilter(filter.id)}
            />
          ))
        )}
      </Container>
    </Paper>
  );
};

Filters.propTypes = {
  filters: PropTypes.array,
  action: PropTypes.func,
};

export default Filters;
