import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from "@material-ui/core";

export const Navbar = styled(AppBar)({
  backgroundColor: 'red'
});

export const Title = styled(Typography).attrs({
  component: 'h5',
  variant: 'h4'
})``;