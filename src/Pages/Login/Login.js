import React from 'react';
import { loginURL } from '../../services/spotify'
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import { Message, Container } from './styles';

const Login = () => {
  const { isAuthenticated, loading, setLoading } = useAuth();
  const history = useHistory();

  if (isAuthenticated) history.push('/');
  
  const handleLogin = () => {
    setLoading(true);
    window.location.href = loginURL();
  }

  return (
    <Layout>
        { loading ? <Loading /> : 
          <Container>
            <Message>Welcome to Spotifood, please login to continue.</Message>
            <Button onClick={handleLogin} label='Login' />
          </Container>
        }
    </Layout>
  );
}

export default Login;