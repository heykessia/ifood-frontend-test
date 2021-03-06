import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getFilters } from '../services/filters';

export const FiltersContext = createContext({});

const initialState = {
  filters: [],
  activeFilters: {
    locale: '',
    country: '',
    timestamp: '',
    limit: '',
    offset: '',
  },
  loading: true,
  error: false,
};

function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'LOADING': {
      return { ...state, loading: payload };
    }
    case 'UPDATE_FILTERS': {
      return { ...state, filters: payload };
    }
    case 'ERROR': {
      return { ...state, error: payload };
    }
    case 'UPDATE_ACTIVE_FILTERS': {
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FiltersContext.Provider
      value={{ filterState: state, filterDispatch: dispatch }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export const fetchFilters = async (dispatch) => {
  try {
    dispatch({ type: 'ERROR', payload: false });
    dispatch({ type: 'LOADING', payload: true });

    const response = await getFilters();

    dispatch({
      type: 'UPDATE_FILTERS',
      payload: response.data.filters,
    });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: true });
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};
