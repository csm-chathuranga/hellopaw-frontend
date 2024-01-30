// theme.js
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontSize:18,
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        size: "medium",
        sx: { borderRadius: "10px" },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontSize:18,
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        size: "medium",
        sx: { borderRadius: "10px" },
      },
    },
  },
});
