import React from 'react';
import { useHistory } from 'react-router-dom';
import { loginURL } from '../../services/spotify';
import { useAuth } from '../../contexts/auth-context';
import { validAuth } from '../../utils/paramsParser';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';

const Login = () => {
  const { auth, loading, setLoading } = useAuth();
  const history = useHistory();

  if (validAuth(auth)) history.push('/');

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
