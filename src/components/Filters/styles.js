import styled from 'styled-components/macro';
import { Paper as MUBox, Container as MUContainer } from '@material-ui/core';

export const Paper = styled(MUBox).attrs({
  elevation: 1,
})`
  ${({ theme }) => `
  padding: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(5)}px;
`}
`;
export const Container = styled(MUContainer)``;
