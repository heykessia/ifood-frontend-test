import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import Message from '../../components/Message';

const ErrorPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <Layout>
      <Message
        text="Something went wrong, please go back to the home page."
        action={goBack}
        actionLabel="Back"
      />
    </Layout>
  );
};

export default ErrorPage;
