import styled from 'styled-components/macro';
import { CircularProgress, Container as MUContainer } from '@material-ui/core';

export const LoadingCircle = styled(CircularProgress).attrs({})`
  ${({ theme }) => `
    color: ${theme.pallete.primary};
  `}
`;

export const Container = styled(MUContainer).attrs({
  maxWidth: 'sm',
})`
  text-align: center;
`;
