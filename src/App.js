import React, { useEffect, useState } from 'react';
import  Home  from "./pages/home";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);

//   // necessary for server-side rendering
//   // because mode is undefined on the server
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <Button
//       variant="soft"
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light');
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   );
// }

function App() {
  // const { mode, setMode } = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  // // const { mode, setMode } = useColorScheme('dark');
  // const toggleTheme = () => {
  //   setIsDarkTheme((prev) => !prev);
  // };

  return (<>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* <CssVarsProvider> */}
       
    <div className="App">  
    {/* <ModeToggle /> */}
          <Routes>
          {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
          ))}
          </Routes>
        {/* <Home /> */}
    </div>
    {/* </CssVarsProvider> */}

    </ThemeProvider>
    </>
  );
}

export default App;
