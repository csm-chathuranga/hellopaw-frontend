import * as React from 'react';
import {useEffect, useState} from 'react';
import CardComp from "../services/components/CardComp"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Grid, IconButton, InputBase,    Paper, Typography } from '@mui/material';
import {  useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"
import { getService } from "../../services/service";
import { useParams } from 'react-router-dom';
import { getMyPets } from "../../services/petService";


export default function Service() {
  const theme = useTheme();
  const [GlobalSearch, setGlobalSearch] = useState('*');
  const navigate = useNavigate()
  const [rows, setRows] = useState([]);
  const [pet, setPet] = useState([]);
  let { type } = useParams();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const getDoctorHandle = async () => {
    console.log(type);
    let res = await getService(type);
    setRows(res.body);
  }

  const getPets = async () => {
    let res = await getMyPets();
    setPet(res.body);
  }

  useEffect(() => {
    getDoctorHandle();
    getPets();
}, [type]);

  return (
    <Grid container direction={"row"}>
        <Grid xs={12}  >

        <Paper component="form" sx={{ p: '5px 5px', display: 'flex',mb:2, alignItems: 'center', width:'95%' ,border:'1px solid',borderColor:theme.palette.border.muted,boxShadow:'none'}} >     
                <IconButton type="button" sx={{ p: '5px',color:theme.palette.txt.muted }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1,color:theme.palette.txt.muted,borderColor:'red' }} placeholder="Search by any Alert Rules or Reason..." 
                          inputProps={{ 'aria-label': 'Search by any Alert Rules or Reason...' }} onChange={(e)=>setGlobalSearch(e.target.value)} />
          </Paper>


            <Typography sx={{fontSize:'20px',p:1}}>{type}</Typography>
            <Stack direction="row" spacing={1}>
              <Chip sx={{fontSize:'12px',width:'100px'}} label="All" onClick={handleClick} />
              <Chip sx={{fontSize:'12px',width:'100px'}} label="Near me" variant="outlined" onClick={handleClick} />
            </Stack>
          </Grid>
          <Grid container direction={'row'} >
            {
              rows?.map((item)=>{
                return (
                  <Grid xs={12} md={4} sx={{p:1,cursor:'pointer'}}  >
                  {/* <Grid xs={12} md={4} sx={{p:1,cursor:'pointer'}} onClick={()=>navigate(`/appointment/${item.id}`)}> */}
                      <CardComp item={item} pet={pet}/>
                  </Grid>
                )
              })
            }
            {rows.length==0 ? <Typography sx={{textAlign:'center', fontSize:'18px',p:2}}>No data found...</Typography> : null}
          </Grid>
    </Grid>

  );
}