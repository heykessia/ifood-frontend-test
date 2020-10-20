import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import { Container, Brand } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Brand />
        </Container>
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
