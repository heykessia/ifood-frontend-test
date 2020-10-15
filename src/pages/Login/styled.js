import styled from 'styled-components';
import { Container as MUContainer } from '@material-ui/core/';
import { Typography } from "@material-ui/core";

export const Container = styled(MUContainer)`
  ${({ theme }) => ``}
`;

export const Title = styled(Typography).attrs({
  component: 'h5',
  variant: 'h5'
})``;