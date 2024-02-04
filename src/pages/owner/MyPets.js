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

export default function MyPets() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate()

  const getPets = async () => {
    let {data} = await getMyPets();
    console.log(data);
    setRows(data);
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
          </Grid>
    <List sx={{ width: '100%',minWidth:'300px', bgcolor: 'background.paper',mt:2,p:1}}>
      {rows.map((item)=>{return (
        <>
        <ListItem alignItems="flex-start" sx={{borderRadius:'5px',border:'1px solid #e9dfdf',mt:0.5}}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" />
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
        </>)
      })}
    </List>
    </Grid>

  );
}