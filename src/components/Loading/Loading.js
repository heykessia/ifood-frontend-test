import React from 'react';
import { LoadingCircle, Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <LoadingCircle data-testid='loading-circle' />
    </Container>
  );
}

export default Loading;