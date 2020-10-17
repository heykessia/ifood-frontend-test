import styled from 'styled-components/macro';
import { Button } from '@material-ui/core/';
import { darken } from '@material-ui/core/styles';
import { colors } from '../../../assets/theme/theme';

export const PrymaryButton = styled(Button)`
  ${({ theme }) => `
  margin-top: 1rem;
  background-color: ${colors.red};
  color: #fff;
  padding: ${theme.spacing(4)};
  font-size: 13px;
  &:hover {
    background-color: ${darken(colors.red, 0.2)};
  }
`}
`;
