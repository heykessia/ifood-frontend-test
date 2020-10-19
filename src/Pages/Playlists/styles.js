import styled from 'styled-components/macro';
import { Container as MUContainer, Typography } from '@material-ui/core';

export const Container = styled(MUContainer)`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(5)}px;
  `}
`;

export const Title = styled(Typography).attrs({
  component: 'p',
  variant: 'h5',
})`
  ${({ theme }) => `
    text-align: center;
    margin-bottom: ${theme.spacing(3)}px;
  `}
`;
