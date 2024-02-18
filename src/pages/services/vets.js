import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import RecipeReviewCard2 from "../post2"


export default function Vets() {

  return (
    <Grid container direction={"row"}>
        <Grid xs={12}  >
            <Typography sx={{fontSize:'20px',p:1}}>Vets</Typography>
            <Typography sx={{fontSize:'14px',p:1,color:'grey'}}>Vets near me</Typography>
          </Grid>

          <Grid xs={12} md={8} >
          <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
              <RecipeReviewCard2 img="https://media.istockphoto.com/id/1490713591/photo/cheerful-male-vet-examining-the-cute-little-cat-at-the-office.jpg?s=612x612&w=0&k=20&c=ffel8-MhyJDYaCV0Mvhs8S6kYIvCPnkMP7f8dGrpzDs="/>
          </Grid>
    </Grid>

  );
}