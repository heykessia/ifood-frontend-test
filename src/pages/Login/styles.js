import styled from 'styled-components/macro';
import { colors } from '../../assets/theme/theme';
import { Typography, Button, Container as MUContainer } from '@material-ui/core/';
import { darken } from '@material-ui/core/styles';

export const Message = styled(Typography).attrs({
  component: 'h1',
  variant: 'h6'
})``

export const LoginButton = styled(Button)`
${({ theme }) => `
  margin-top: 1rem;
  background-color: ${colors.red};
  color: #fff;
  padding: ${theme.spacing(4)};
  font-size: 13px;
  &:hover {
    background-color: ${darken(colors.red, 0.2)};
  }
`}`;

export const Container = styled(MUContainer).attrs({
  maxWidth: 'sm'
})`
  text-align: center;
`