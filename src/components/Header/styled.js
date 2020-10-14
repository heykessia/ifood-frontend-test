import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from "@material-ui/core";

export const Navbar = styled(AppBar)`
  ${({ theme }) => `
    padding: ${theme.spacing(2)}px;
    background-color: ${theme.pallete.primaryRed};
  `}
`;

export const Title = styled(Typography).attrs({
  component: 'h5',
  variant: 'h5'
})``;