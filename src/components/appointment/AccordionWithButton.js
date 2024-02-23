import React, { useState } from 'react';
import { Typography, Button,Grid } from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BookmarkIcon from '@mui/icons-material/Bookmark'

const AccordionWithButton = ({setBooking}) => {

  return (
    <div style={{width:'100%'}}>
      <Grid display={'flex'} direction={'row'} gap={1} sx={{p:0.5,width:'100%'}}>
        <Grid xs={5} display={'flex'} alignItems={'center'}>
          <QueryBuilderIcon sx={{mr:2,fontSize:'30px',color:'#ea8428'}}/> <Typography sx={{fontSize:'16px'}}>6-00 to 6-15</Typography>
        </Grid>
        <Grid xs={3} display={'flex'} alignItems={'center'}>
          <Typography sx={{fontSize:'13px'}}>Available</Typography>
        </Grid>
        <Grid xs={4} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Button variant="contained" color="error" onClick={()=>setBooking(true)}><BookmarkIcon sx={{color:'white',mr:1}} />  Book Now </Button>
        </Grid>
    </Grid>
    </div>
  );
};

export default AccordionWithButton;
