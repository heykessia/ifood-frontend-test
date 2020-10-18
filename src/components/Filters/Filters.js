import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiltersContext, fetchFilters } from '../../contexts/filters-context';
import Filter from '../Filter/Filter';
import Loading from '../Loading/Loading';
import { Container, Grid, Title } from './styles';

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
    <Container>
      {state.loading ? (
        <Loading />
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Title>Filters</Title>
          </Grid>
          {state.filters.length > 0 &&
            state.filters.map((filter) => (
              <Grid item xs={12} sm={6} md={4} key={filter.id}>
                <Filter
                  filter={filter}
                  action={updateFilters}
                  selected={selectedFilter(filter.id)}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  );
};

Filters.propTypes = {
  filters: PropTypes.array,
  action: PropTypes.func,
};

export default Filters;
