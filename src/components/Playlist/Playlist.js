import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia } from './styles';

const Playlist = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
       <Card>
         <CardMedia image={props.playlist.images[0].url}/>
       </Card>
    </Grid>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired
}

export default Playlist;