import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getPlaylists } from '../services/spotify';
import { filterParams } from '../utils/paramsParser';

export const PlaylistsContext = createContext({});

const initialState = {
  playlists: [],
  loading: true,
  error: false,
  search: '',
};

function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'LOADING': {
      return { ...state, loading: payload };
    }
    case 'UPDATE_PLAYLISTS': {
      return { ...state, playlists: payload };
    }
    case 'ERROR': {
      return { ...state, error: payload };
    }
    case 'UPDATE_SEARCH': {
      return { ...state, search: payload };
    }
    default: {
      return state;
    }
  }
}

export const PlaylistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlaylistsContext.Provider
      value={{ playlistState: state, playlistDispatch: dispatch }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

PlaylistsProvider.propTypes = {
  children: PropTypes.node,
};

export const fetchPlaylists = async (auth, dispatch, activeFilters) => {
  try {
    dispatch({ type: 'ERROR', payload: false });
    dispatch({ type: 'LOADING', payload: true });

    const params = filterParams(activeFilters);
    const response = await getPlaylists(auth, params);

    dispatch({
      type: 'UPDATE_PLAYLISTS',
      payload: response.data.playlists.items,
    });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: true });
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const searchPlaylists = (playlists, searchTerm) => {
  const term = searchTerm ? searchTerm.trim().toLowerCase() : '';

  return playlists.filter(
    (playlist) => playlist.name.toLowerCase().search(term) > -1
  );
};
