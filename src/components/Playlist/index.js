import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardActionArea } from './styles';

const Playlist = ({ playlist }) => {
  const listen = () => {
    return window.open(playlist.external_urls.spotify, '_blank');
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      {playlist && (
        <Card data-testid="card-container">
          <CardActionArea onClick={listen}>
            <CardMedia
              image={playlist.images[0].url}
              data-testid={playlist.name}
            />
          </CardActionArea>
        </Card>
      )}
    </Grid>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.object,
};

export default Playlist;
