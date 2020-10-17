import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import { parseAuthParams, validAuth } from '../../utils/paramsParser';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';

const Authentication = () => {
  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const authParams = parseAuthParams();

    if (!validAuth(authParams)) return history.push('/login');

    setAuth(authParams);
    history.push('/');
  }, [auth, history, setAuth]);

  return (
    <Layout>
      <Loading />
    </Layout>
  );
};

export default Authentication;
