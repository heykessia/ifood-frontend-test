import React, { useContext } from 'react';
import {
  PlaylistsContext,
  searchPlaylists,
} from '../../contexts/playlists-context';

import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import Playlist from '../../components/Playlist/Playlist';
import SearchInput from '../../components/Shared/SearchInput/SearchInput';
import { Grid, Container } from './styles';

const Playlists = (reload, search) => {
  const { state } = useContext(PlaylistsContext);

  const retry = () => {
    return reload();
  };

  const updateSearchTerm = (event) => {
    search(event.target.value);
  };

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
