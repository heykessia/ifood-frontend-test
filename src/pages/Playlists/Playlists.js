import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

import Layout from '../../components/Layout/Layout';
import Playlists from '../../components/Playlists/Playlists';
import Filters from '../../components/Filters/Filters';

const PlaylistsPage = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) return history.push('/login');
  }, [isAuthenticated, history]);

  return (
    <Layout>
      <Filters />
      <Playlists />
    </Layout>
  );
};

export default PlaylistsPage;
