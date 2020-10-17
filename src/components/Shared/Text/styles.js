import styled from 'styled-components/macro';
import { Typography } from '@material-ui/core';

export const TextStyle = styled(Typography).attrs({
  component: 'p',
  variant: 'body1',
})`
  text-align: center;
`;
