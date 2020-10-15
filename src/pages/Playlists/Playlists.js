import React from 'react';
import Header from '../../components/Header/Header';
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';

const Playlists = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();
  
  if (!isAuthenticated) history.push('/login')


  return (
    <Header />
  );
}

export default Playlists;
