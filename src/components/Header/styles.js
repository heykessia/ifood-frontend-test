import styled from 'styled-components/macro';
import { Typography, AppBar } from "@material-ui/core";

export const Navbar = styled(AppBar).attrs({
  position: 'relative'
})`
  ${({ theme }) => `
    padding: ${theme.spacing(2)}px;
    background-color: ${theme.pallete.primary.main};
  `}
`;

export const Title = styled(Typography).attrs({
  component: 'h5',
  variant: 'h5'
})``;