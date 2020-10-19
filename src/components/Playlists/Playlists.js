import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../components/Playlist/Playlist';
import { Grid, Container } from './styles';

const Playlists = ({ playlists }) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {playlists &&
          playlists.map((playlist) => (
            <Playlist playlist={playlist} key={playlist.id} />
          ))}
      </Grid>
    </Container>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array,
};

export default Playlists;
