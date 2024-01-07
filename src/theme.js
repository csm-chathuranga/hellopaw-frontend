// theme.js
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontSize:18,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontSize:18,
  },
});
