import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import {
  PlaylistsContext,
  fetchPlaylists,
} from '../../contexts/playlists-context';
import { FiltersContext } from '../../contexts/filters-context';
import { validAuth } from '../../utils/paramsParser';

import Layout from '../../components/Layout/Layout';
import Playlists from '../../components/Playlists/Playlists';
import Filters from '../../components/Filters/Filters';

const PlaylistsPage = () => {
  const { dispatch } = useContext(PlaylistsContext);
  const { state } = useContext(FiltersContext);
  const { auth } = useAuth();
  const history = useHistory();

  const load = async () => {
    await fetchPlaylists(auth, dispatch, state.activeFilters);
  };

  const search = (term) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: term,
    });
  };

  useEffect(() => {
    const loadPlaylists = async () => {
      if (!validAuth(auth)) return history.push('/login');

      await fetchPlaylists(auth, dispatch, state.activeFilters);
    };

    loadPlaylists();

    const interval = setInterval(loadPlaylists, 30000);

    return () => clearInterval(interval);
  }, [auth, dispatch, history, state]);

  return (
    <Layout>
      <Filters />
      <Playlists reload={load} search={search} />
    </Layout>
  );
};

export default PlaylistsPage;
