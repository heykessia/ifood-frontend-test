import styled from 'styled-components';
import { Container as MUContainer } from '@material-ui/core/';
import Logo from '../../assets/images/ifood-logo.svg'

export const Container = styled(MUContainer).attrs({
  maxWidth: 'sm'
})`
  text-align: center;
`

export const Brand = styled.img.attrs({
  src: Logo
})`
  max-height: 12rem;
`