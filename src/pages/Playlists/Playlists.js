import React, { useEffect, useContext } from 'react';
import { PlaylistsContext, fetchPlaylists } from '../../contexts/playlists-context'
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

const Playlists = () => {
  const { state, dispatch } = useContext(PlaylistsContext);
  const { auth, isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) return history.push('/login');

    fetchPlaylists(auth, dispatch);
  }, [auth, dispatch, history, isAuthenticated]);

  return (
    <Layout>
      {console.log('state', state)}
    </Layout>
  );
}

export default Playlists;
