import styled from 'styled-components/macro';
import { Container as MUContainer } from '@material-ui/core/';

export const Container = styled(MUContainer).attrs({
  maxWidth: 'sm',
})`
  text-align: center;
`;
