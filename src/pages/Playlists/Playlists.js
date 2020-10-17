import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PlaylistsContext,
  fetchPlaylists,
  searchPlaylists,
} from '../../contexts/playlists-context';
import { useAuth } from '../../contexts/auth-context';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import Playlist from '../../components/Playlist/Playlist';
import SearchInput from '../../components/Shared/SearchInput/SearchInput';

import { Grid, Container } from './styles';

const Playlists = () => {
  const { state, dispatch } = useContext(PlaylistsContext);
  const { auth, isAuthenticated } = useAuth();
  const history = useHistory();

  const retry = () => {
    return fetchPlaylists(auth, dispatch);
  };

  const updateSearchTerm = (event) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: event.target.value,
    });
  };

  useEffect(() => {
    if (!isAuthenticated) return history.push('/login');
    const interval = setInterval(() => {
      fetchPlaylists(auth, dispatch);
    }, 30000);
    return () => clearInterval(interval);
  }, [auth, dispatch, history, isAuthenticated]);

  return (
    <Layout>
      {state.loading ? (
        <Loading />
      ) : state.error ? (
        <Message
          text="Sorry, an error occured while getting the playlists from Spotify."
          action={retry}
          actionLabel="Try again"
        />
      ) : (
        <Container maxWidth="md">
          <Container>
            <SearchInput
              placeholder="Search a playlist by name..."
              action={updateSearchTerm}
              value={state.search}
            />
          </Container>
          <Grid container spacing={4}>
            {state.playlists &&
              searchPlaylists(state.playlists, state.search).map((playlist) => (
                <Playlist playlist={playlist} key={playlist.id} />
              ))}
          </Grid>
        </Container>
      )}
    </Layout>
  );
};

export default Playlists;
