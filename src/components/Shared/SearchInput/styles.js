import styled from 'styled-components/macro';
import { Input as MUInput, InputAdornment } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { colors } from '../../../assets/theme/theme';

export const TextInput = styled(MUInput)`
  ${({ theme }) => `
    &&:after {
      border-bottom: 2px solid ${theme.pallete.primary};
    }
  `}
`;

export const IconContainer = styled(InputAdornment)``;
export const Search = styled(SearchIcon)`
  ${({ theme }) => `
    color: ${theme.pallete.primary};
  `}
`;