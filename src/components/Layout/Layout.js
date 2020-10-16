import React from 'react';

import Header from '../Header/Header';
import { Container, Brand } from './styles';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Brand />
          {children}
        </Container>
      </main>
    </>
  )
}

export default Layout;