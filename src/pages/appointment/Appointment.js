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
import { stOpen,logged } from "../../store";
import { useAtom } from "jotai";

export default function Appointment() {
  const theme = useTheme();
  const [GlobalSearch, setGlobalSearch] = useState('');
  const navigate = useNavigate()
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loggedStatus] = useAtom(logged);
  const [open, setOpen] = useAtom(stOpen);

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

useEffect(() => {
  // alert();
  const filterData = () => {
    const filteredData = rows.filter(row => {
      const other = row.other ? JSON.parse(row.other) : {};
      const title = other.title || '';
      const des = other.des || '';
      return (
        title.toLowerCase().includes(GlobalSearch.toLowerCase()) ||
        des.toLowerCase().includes(GlobalSearch.toLowerCase())
      );
    });
    setFilteredRows(filteredData);
  };
  filterData();
}, [GlobalSearch, rows]);

  return (
    <Grid container direction={"row"}>
        <Grid xs={12}  >

        <Paper component="form" sx={{ p: '5px 5px', display: 'flex', mb: 2, alignItems: 'center', width: '95%', boxShadow: 'none' }}>
          <IconButton type="button" sx={{ p: '5px', color: theme.palette.txt.muted }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: theme.palette.txt.muted,
              border: 'none', // Remove the border
              '& .MuiInputBase-input': {
                border: 'none', // Ensure the input itself has no border
              },
            }}
            placeholder="Search by any name or description..."
            inputProps={{ 'aria-label': 'Search by any name or description...' }}
            onChange={(e)=>setGlobalSearch(e.target.value)}
          />
        </Paper>



            <Typography sx={{fontSize:'20px',p:1}}>Make an appointment</Typography>
            <Stack direction="row" spacing={1}>
              <Chip sx={{fontSize:'12px',width:'100px'}} label="All" onClick={handleClick} />
              <Chip sx={{fontSize:'12px',width:'100px'}} label="Near me" variant="outlined" onClick={handleClick} />
            </Stack>
          </Grid>
          <Grid container direction={'row'} >
            {
              filteredRows.map((item)=>{
                return (
                  <Grid xs={12} md={4} sx={{p:1,cursor:'pointer'}} onClick={()=>loggedStatus ? navigate(`/appointment/${item.id}`) : setOpen(true)}>
                      <RecipeReviewCard2 item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
    </Grid>

  );
}