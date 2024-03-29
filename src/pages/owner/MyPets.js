import * as React from 'react';
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IconButton, Grid, Typography } from "@mui/material";
import { getMyPets } from "../../services/petService";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {Link} from "react-router-dom";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@mui/styles';
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
} from "@mui/material";
// import SearchIcon from "@material-ui/icons/Search";
// import ClearIcon from "@material-ui/icons/Clear";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { IMG_URL } from "../../utils/constant";

// const useStyles = makeStyles(() => {
//   return createStyles({
//     search: {
//       margin: "0"
//     }
//   });
// });

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'50px',
    }
  },
}));

export default function MyPets() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate()
  const classes = useStyles();
  // const { search } = useStyles();

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  const getPets = async () => {
    let res = await getMyPets();
    setRows(res.body);
  }
  useEffect(() => {
    getPets();
}, []);

  return (
    <Grid container direction="column">
          <Grid container direction="column" sx={{position:'relative'}}>
              <Typography sx={{m:1,fontSize:'18px'}}>Your pets</Typography>
              <Button variant="outlined" startIcon={<AddIcon />} sx={{maxWidth:'200px',position:'absolute',right:20,top:5}}
              onClick={()=> navigate(`/petRegister`)}> Add New  </Button>

          {/* <FormControl > */}
          {/* <TextField
      className={classes.root}
      id= "outlined-basic"
      variant= "outlined"
      fullWidth= {true}
    /> */}
              {/* <TextField
                className={classes.root}
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: showClearIcon }}
                      onClick={handleClick}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  )
                }}
              /> */}
          {/* </FormControl> */}

          </Grid>
   
    

{rows.length > 0 ? 
 <List sx={{ width: '100%',minWidth:'300px', bgcolor: 'background.paper',mt:2,p:1}}>
      {rows.map((item,i)=>{return (
        <div key={'pet-'+i}>
        <ListItem alignItems="flex-start" sx={{borderRadius:'5px',border:'1px solid #8080801c',mt:0.5}}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={IMG_URL+item?.image || 'default.png'} />
          </ListItemAvatar>
          <ListItemText
            primary={item?.breed || 'N/A'}
            secondary={
              <Grid display={'flex'} direction={'column'} gap={1} sx={{mt:1}}>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"  >
                  Birth date : -{item?.birth_date || 'N/A'}
                </Typography>
              
               <Typography
                  // sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"  >
                 <Chip label={item?.gender || 'N/A'} color={item?.gender=='male' || item?.gender=='Male'  ? 'success' : 'primary' } sx={{minWidth:'50px',height:'20px'}}/> 
                </Typography>
                
              </Grid>
            }
          />
           <Link to={`/petRegister/${item?.id}`}>
              <IconButton  >
                  <EditIcon />
              </IconButton>
            </Link>
            <Link to={`/ViewPet/${item?.id}`}>
              <IconButton  >
                <VisibilityIcon sx={{color:'light-blue'}}/>
              </IconButton>
            </Link>
            <IconButton onClick={()=>alert()} >
              <DeleteForeverOutlinedIcon sx={{color:'red'}}/>
            </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
        </div>)
      })}
    </List>
:<>
    <Box sx={{ width: '100%',mt:1}}>
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
    </Box>
    <Box sx={{ width: '100%',mt:2}}>
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
    </Box>
    <Box sx={{ width: '100%',mt:2}}>
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
    </Box>
    <Box sx={{ width: '100%',mt:2}}>
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
      <Skeleton animation="wave"sx={{height:'40px'}} />
    </Box></>}

    </Grid>

  );
}