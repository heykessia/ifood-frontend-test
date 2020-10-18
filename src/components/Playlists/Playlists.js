import React, { useEffect, useContext } from 'react';
import {
  PlaylistsContext,
  fetchPlaylists,
  searchPlaylists,
} from '../../contexts/playlists-context';
import { useAuth } from '../../contexts/auth-context';

import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import Playlist from '../../components/Playlist/Playlist';
import SearchInput from '../../components/Shared/SearchInput/SearchInput';
import { Grid, Container } from './styles';

const Playlists = () => {
  const { state, dispatch } = useContext(PlaylistsContext);
  const { auth } = useAuth();

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
    const interval = setInterval(() => {
      fetchPlaylists(auth, dispatch);
    }, 30000);

    return () => clearInterval(interval);
  }, [auth, dispatch]);

  return (
    <>
      <Container maxWidth="sm">
        <SearchInput
          placeholder="Search a playlist by name..."
          action={updateSearchTerm}
          value={state.search}
        />
      </Container>
      {state.loading ? (
        <Loading />
      ) : state.error ? (
        <Message
          text="Sorry, an error occured while getting the playlists from Spotify."
          action={retry}
          actionLabel="Try again"
        />
      ) : (
        <Container>
          <Grid container spacing={4}>
            {state.playlists &&
              searchPlaylists(state.playlists, state.search).map((playlist) => (
                <Playlist playlist={playlist} key={playlist.id} />
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Playlists;
