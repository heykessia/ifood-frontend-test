import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { parseAuthParams, validAuth } from '../../utils/paramsParser';
import { login } from '../../services/auth';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

const Authentication = () => {
  const history = useHistory();

  useEffect(() => {
    const authParams = parseAuthParams();

    if (!validAuth(authParams)) return history.push('/login');

    login(authParams);
    history.push('/');
  }, [history]);

  return (
    <Layout>
      <Loading />
    </Layout>
  );
};

export default Authentication;
