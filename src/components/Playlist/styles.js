import styled from 'styled-components/macro';
import {
  Typography,
  AppBar,
  Grid as MUGrid,
  Card as MUCard,
  CardMedia as MUCardMedia,
} from '@material-ui/core';

export const Navbar = styled(AppBar).attrs({
  position: 'relative',
})`
  ${({ theme }) => `
    padding: ${theme.spacing(2)}px;
    background-color: ${theme.pallete.primary};
  `}
`;

export const Name = styled(Typography)``;

export const Grid = styled(MUGrid)``;

export const Card = styled(MUCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardMedia = styled(MUCardMedia)`
  padding-top: 100%;
`;
