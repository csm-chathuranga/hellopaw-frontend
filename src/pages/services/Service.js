import * as React from 'react';
import { useEffect, useState } from 'react';
import CardComp from "../services/components/CardComp";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import { useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { getService } from "../../services/service";
import { useParams } from 'react-router-dom';
import { getMyPets } from "../../services/petService";
import { logged, user } from "../../store";
import { useAtom } from "jotai";

export default function Service() {
  const theme = useTheme();
  const [GlobalSearch, setGlobalSearch] = useState('');
  const navigate = useNavigate();
  const [loggedStatus] = useAtom(logged);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [pet, setPet] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Example state for user authentication
  let { type } = useParams();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const getDoctorHandle = async () => {
    try {
      let res = await getService(type);
      setRows(res.body);
    } catch (error) {
      console.error(error);
    }
  }

  const getPets = async () => {
    try {
      let res = await getMyPets();
      setPet(res.body);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDoctorHandle();
    getPets();
    // Example logic for checking if the user is logged in
    const checkUserAuth = () => {
      setIsUserLoggedIn(loggedStatus);
    };
    checkUserAuth();
  }, [type]);

  useEffect(() => {
    const filterData = () => {
      const filteredData = rows
        .filter(row => row.other && row.other.trim() !== '') 
        .filter(row => {
          const other = JSON.parse(row.other || '{}');
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Grid container direction={"row"}>
      <Grid xs={12}>
        <Paper component="form" sx={{ p: '5px 5px', display: 'flex', mb: 2, alignItems: 'center', width: '95%', boxShadow: 'none' }}>
          <IconButton type="button" sx={{ p: '5px', color: theme.palette.txt.muted }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: theme.palette.txt.muted,
              border: 'none',
              '& .MuiInputBase-input': {
                border: 'none',
              },
            }}
            placeholder="Search by any name or description..."
            inputProps={{ 'aria-label': 'Search by any name or description...' }}
            onChange={(e) => setGlobalSearch(e.target.value)}
          />
        </Paper>

        <Typography sx={{ fontSize: '20px', p: 1 }}>{capitalizeFirstLetter(type)}</Typography>
        <Stack direction="row" spacing={1}>
          <Chip 
            sx={{ fontSize: '12px', width: '100px' }} 
            label="All" 
            onClick={isUserLoggedIn ? handleClick : null} 
            // disabled={!isUserLoggedIn} // Disable if not logged in
          />
          <Chip 
            sx={{ fontSize: '12px', width: '100px' }} 
            label="Near me" 
            variant="outlined" 
            onClick={isUserLoggedIn ? handleClick : null} 
            // disabled={!isUserLoggedIn} // Disable if not logged in
          />
        </Stack>
      </Grid>
      <Grid container direction={'row'}>
        {filteredRows.map((item) => {
          return (
            <Grid xs={12} md={4} sx={{ p: 1, cursor: 'pointer' }}>
              <CardComp item={item} pet={pet} isUserLoggedIn={isUserLoggedIn}/>
            </Grid>
          );
        })}
        {filteredRows.length === 0 ? <Typography sx={{ textAlign: 'center', fontSize: '18px', p: 2 }}>No data found...</Typography> : null}
      </Grid>
    </Grid>
  );
}
