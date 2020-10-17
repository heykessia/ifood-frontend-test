import styled from 'styled-components/macro';
import { Container as MUContainer } from '@material-ui/core/';
import Logo from '../../assets/images/ifood-logo.svg';

export const Container = styled(MUContainer).attrs({
  maxWidth: 'sm',
})`
  text-align: center;
`;

export const Brand = styled.img.attrs({
  src: Logo,
  alt: 'IFood Logo',
})`
  max-height: 12rem;
`;
