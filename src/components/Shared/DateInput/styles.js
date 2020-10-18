import styled from 'styled-components/macro';
import { colors } from '../../../assets/theme/theme';
import { TextField, FormControl } from '@material-ui/core';

export const DatePicker = styled(TextField).attrs({
  InputLabelProps: {
    shrink: true,
  },
})`
  ${({ theme }) => `
  && .MuiInputLabel-shrink {
    color: ${colors.gray};
  }

  && .MuiInput-underline:after {
    border-bottom: 2px solid ${colors.darkerGray}
  }
`}
`;
export const FormContainer = styled(FormControl)`
  ${({ theme }) => `
    min-width: 100%;
  `}
`;
