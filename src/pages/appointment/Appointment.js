import * as React from 'react';
import {useEffect, useState} from 'react';
import RecipeReviewCard2 from "../post2"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Grid, IconButton, InputBase,    Paper, Typography } from '@mui/material';
import {  useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"
import { getDoctors } from "../../services/doctor";


export default function Appointment() {
  const theme = useTheme();
  const [GlobalSearch, setGlobalSearch] = useState('*');
  const navigate = useNavigate()
  const [rows, setRows] = useState([]);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const getDoctorHandle = async () => {
    let res = await getDoctors();
    setRows(res.body);
  }
  useEffect(() => {
    getDoctorHandle();
}, []);

  return (
    <Grid container direction={"row"}>
        <Grid xs={12}  >

        <Paper component="form" sx={{ p: '5px 5px', display: 'flex',mb:2, alignItems: 'center', width:'95%' ,border:'1px solid',borderColor:theme.palette.border.muted,boxShadow:'none'}} >     
                <IconButton type="button" sx={{ p: '5px',color:theme.palette.txt.muted }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1,color:theme.palette.txt.muted,border:'none' }} placeholder="Search by any Alert Rules or Reason..." 
                          inputProps={{ 'aria-label': 'Search by any Alert Rules or Reason...' }} onChange={(e)=>setGlobalSearch(e.target.value)} />
          </Paper>


            <Typography sx={{fontSize:'20px',p:1}}>Make an appointment</Typography>
            <Stack direction="row" spacing={1}>
              <Chip sx={{fontSize:'12px',width:'100px'}} label="All" onClick={handleClick} />
              <Chip sx={{fontSize:'12px',width:'100px'}} label="Near me" variant="outlined" onClick={handleClick} />
            </Stack>
          </Grid>
          <Grid container direction={'row'} >
            {
              rows.map((item)=>{
                return (
                  <Grid xs={12} md={4} sx={{p:1,cursor:'pointer'}} onClick={()=>navigate(`/appointment/${item.id}`)}>
                      <RecipeReviewCard2 item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
    </Grid>

  );
}