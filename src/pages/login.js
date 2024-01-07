import  Header  from "../components/Header";
import  Footer  from "../components/Footer";


import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'


function Login() {

  
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log('Login successful', data);
  };
    return (
      <>
        <div className="main-wrapper">
            <Header />

          {/* <!--sab banner wraper start--> */}
          <div class="sab-banner-wraper">
            <div class="container">
              <div class="sab-banner-text">
                 <h2>Login</h2>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Login </li>
                  </ul>
              </div>
            </div>
            <div class="custom-shape-divider-bottom-1687358784">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                  </svg>
              </div>
          </div>
          {/* <!--sab banner wraper end--> */}

           <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        // backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Login Form
      </Typography>
      <TextField
        fullWidth
        label="Username"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        })}
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
        sx={{ mt: 2 }}
      />
      <FormControlLabel
        control={<Checkbox {...register('rememberMe')} color="primary" />}
        label="Remember Me"
        sx={{ mt: 1, textAlign: 'left' }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2">
          Forgot Password?
        </Link>
        <Box mt={1}>
          <Link href="#" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
        
          
        </div>
        <Footer/>
        </>
      )
}

export default Login;



// import { useForm } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // Add your login logic here using the data object
//     console.log('Login successful', data);
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       sx={{
//         maxWidth: '500px',
//         margin: 'auto',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//         backgroundColor: 'white',
//       }}
//     >
//       <Typography variant="h5" component="div" sx={{ mb: 2 }}>
//         Login Form
//       </Typography>
//       <TextField
//         fullWidth
//         label="Username"
//         {...register('username', {
//           required: 'Username is required',
//           minLength: {
//             value: 3,
//             message: 'Username must be at least 3 characters',
//           },
//         })}
//         error={Boolean(errors.username)}
//         helperText={errors.username?.message}
//         margin="normal"
//       />
//       <TextField
//         fullWidth
//         type="password"
//         label="Password"
//         {...register('password', {
//           required: 'Password is required',
//           minLength: {
//             value: 6,
//             message: 'Password must be at least 6 characters',
//           },
//         })}
//         error={Boolean(errors.password)}
//         helperText={errors.password?.message}
//         margin="normal"
//         sx={{ mt: 2 }}
//       />
//       <FormControlLabel
//         control={<Checkbox {...register('rememberMe')} color="primary" />}
//         label="Remember Me"
//         sx={{ mt: 1, textAlign: 'left' }}
//       />
//       <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//         Login
//       </Button>
//       <Box sx={{ mt: 2, textAlign: 'center' }}>
//         <Link href="#" variant="body2">
//           Forgot Password?
//         </Link>
//         <Box mt={1}>
//           <Link href="#" variant="body2">
//             Don't have an account? Sign Up
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Login;