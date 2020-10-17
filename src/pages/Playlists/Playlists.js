import React, { useEffect, useContext } from 'react';
import { PlaylistsContext, fetchPlaylists } from '../../contexts/playlists-context'
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/ErrorMessage/Error';
import Playlist from '../../components/Playlist/Playlist';

import { Grid, Container } from './styles';

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
      {
        state.loading ? <Loading /> :
        state.error ? <Error /> :
        <Container maxWidth='md'>
          <Grid container spacing={4}>
            { state.playlists && state.playlists.map((playlist) => <Playlist playlist={playlist} key={playlist.id} />) }
          </Grid>
        </Container>
      }
    </Layout>
  );
}

export default Playlists;
