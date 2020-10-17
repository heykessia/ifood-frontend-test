import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  red: '#ea1d2c',
};

export const theme = createMuiTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  pallete: {
    primary: {
      main: colors.red,
    },
  },
});
