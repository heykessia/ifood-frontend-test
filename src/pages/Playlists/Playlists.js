import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import {
  PlaylistsContext,
  fetchPlaylists,
  searchPlaylists,
} from '../../contexts/playlists-context';
import { FiltersContext, fetchFilters } from '../../contexts/filters-context';
import { validAuth } from '../../utils/paramsParser';

import Layout from '../../components/Layout/Layout';
import Playlists from '../../components/Playlists/Playlists';
import Filters from '../../components/Filters/Filters';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import SearchInput from '../../components/Shared/SearchInput/SearchInput';

import { Container, Title } from './styles';

const PlaylistsPage = () => {
  const { playlistState, playlistDispatch } = useContext(PlaylistsContext);
  const { filterState, filterDispatch } = useContext(FiltersContext);
  const { auth } = useAuth();
  const history = useHistory();

  const load = () => {
    if (!validAuth(auth)) return history.push('/login');
    fetchPlaylists(auth, playlistDispatch, filterState.activeFilters);
  };

  const updateSearchTerm = (event) => {
    playlistDispatch({
      type: 'UPDATE_SEARCH',
      payload: event.target.value,
    });
  };

  const updateFilters = ({ field, value }) => {
    filterDispatch({
      type: 'UPDATE_ACTIVE_FILTERS',
      payload: { [field]: value },
    });
  };

  useEffect(() => {
    if (!validAuth(auth)) return history.push('/login');
  }, [auth, history]);

  useEffect(() => {
    fetchPlaylists(auth, playlistDispatch, filterState.activeFilters);

    const interval = setInterval(
      fetchPlaylists(auth, playlistDispatch, filterState.activeFilters),
      30000
    );

    return () => clearInterval(interval);
  }, [auth, playlistDispatch, filterState.activeFilters]);

  useEffect(() => {
    fetchFilters(filterDispatch);
  }, [filterDispatch]);

  return (
    <Layout>
      <Container>
        {filterState.loading ? (
          <Loading />
        ) : (
          <Filters
            filters={filterState.filters}
            activeFilters={filterState.activeFilters}
            updateFilters={updateFilters}
          />
        )}
      </Container>
      <Container maxWidth="sm">
        <Title>Search</Title>
        <SearchInput
          placeholder="Search a playlist by name..."
          action={updateSearchTerm}
          value={playlistState.search}
        />
      </Container>
      {playlistState.loading ? (
        <Loading />
      ) : playlistState.error ? (
        <Container>
          <Message
            text="Sorry, an error occured while getting the playlists from Spotify."
            action={load}
            actionLabel="Try again"
          />
        </Container>
      ) : (
        <Playlists
          playlists={searchPlaylists(
            playlistState.playlists,
            playlistState.search
          )}
        />
      )}
    </Layout>
  );
};

export default PlaylistsPage;
