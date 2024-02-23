import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import RecipeReviewCard2 from "../post2"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Vets() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Grid container direction={"row"}>
        <Grid xs={12}  >
            <Typography sx={{fontSize:'20px',p:1}}>Vets</Typography>
            {/* <Typography sx={{fontSize:'14px',p:1,color:'grey'}}>Vets near me</Typography> */}
            <Stack direction="row" spacing={1}>
              <Chip sx={{fontSize:'12px',width:'100px'}} label="All" onClick={handleClick} />
              <Chip sx={{fontSize:'12px',width:'100px'}} label="Near me" variant="outlined" onClick={handleClick} />
            </Stack>
          </Grid>
          <Grid container direction={'row'} >
            <Grid xs={12} md={4} sx={{p:1}} >
                <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
            </Grid>
            <Grid xs={12} md={4} sx={{p:1}}>
                <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
            </Grid>
            <Grid xs={12} md={4} sx={{p:1}}>
                <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
            </Grid>
            <Grid xs={12} md={4} sx={{p:1}}>
                <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
            </Grid>
          </Grid>
    </Grid>

  );
}