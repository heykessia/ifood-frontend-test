import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getPlaylists } from '../services/spotify';

export const PlaylistsContext = createContext({});

const initialState = {
  playlists: null,
  loading: true,
  error: false,
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
    default: {
      return state;
    }
  }
}

export const PlaylistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlaylistsContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

PlaylistsProvider.propTypes = {
  children: PropTypes.node,
};

export const fetchPlaylists = async (auth, dispatch) => {
  try {
    dispatch({ type: 'ERROR', payload: false });
    dispatch({ type: 'LOADING', payload: true });

    const response = await getPlaylists(auth);
    dispatch({
      type: 'UPDATE_PLAYLISTS',
      payload: response.data.playlists.items,
    });
  } catch {
    dispatch({ type: 'ERROR', payload: true });
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};
