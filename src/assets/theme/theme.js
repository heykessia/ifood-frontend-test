import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  red: '#ea1d2c',
  gray: '#737373',
  darkerGray: '#222222',
};

export const theme = createMuiTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  pallete: {
    primary: colors.red,
  },
});
