import React from 'react';
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

const Playlists = () => {
  const { auth, isAuthenticated } = useAuth();
  const history = useHistory();

  if (!isAuthenticated) history.push('/login');

  return (
    <Layout>
      You are in Playlists page
    </Layout>
  );
}

export default Playlists;
