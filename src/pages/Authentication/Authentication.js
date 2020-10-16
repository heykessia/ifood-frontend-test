import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom';
import { parseAuthParams, validAuth } from '../../utils/paramsParser'

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';

const Login = () => {
  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const authParams = parseAuthParams();

    if (!validAuth(authParams)) history.push('/error')

    setAuth(authParams);
    history.push('/');
  }, [auth, history, setAuth]);


  return (
    <Layout>
      <Loading />
    </Layout>
  );
}

export default Login;