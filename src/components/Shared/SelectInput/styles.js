import styled from 'styled-components/macro';
import { colors } from '../../../assets/theme/theme';
import {
  Select as MUSelect,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

export const Select = styled(MUSelect)`
  ${({ theme }) => `
    &&:after {
      border-bottom: 2px solid ${colors.darkerGray};
    }
  `}
`;
export const SelectOption = styled(MenuItem)``;
export const Label = styled(InputLabel)`
  ${({ theme }) => `
    && {
      color: ${colors.gray};
    }
  `}
`;
export const FormContainer = styled(FormControl)`
  ${({ theme }) => `
    min-width: 100%;
  `}
`;
