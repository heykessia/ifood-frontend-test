import React from 'react';
import { useHistory } from 'react-router-dom';
import { loginURL } from '../../services/spotify';
import { useAuth } from '../../contexts/auth-context';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';

const Login = () => {
  const { isAuthenticated, loading, setLoading } = useAuth();
  const history = useHistory();

  if (isAuthenticated) history.push('/');

  const handleLogin = () => {
    setLoading(true);
    window.location.href = loginURL();
  };

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Message
          text="Welcome to Spotifood, please login to continue."
          action={handleLogin}
          actionLabel="Login"
        />
      )}
    </Layout>
  );
};

export default Login;
