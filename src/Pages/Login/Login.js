import React, { useState } from 'react';
import { loginURL } from '../../services/spotify';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';

const Login = () => {
  const [loading, setLoading] = useState(false);

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
