import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors'
import Rating from '@mui/material/Rating';
import { IMG_URL } from "../utils/constant";


export default function RecipeReviewCard2({item}) {
  let itemJson= item?.other ? JSON.parse(item?.other) : null;

  return (
    <Card sx={{ mt:2 ,borderRadius:'30px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {item.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={item.name}
        subheader={item.clinic_location}
      />
      <CardMedia   component="img"  height="200"
        src={itemJson?.image ? IMG_URL+itemJson?.image : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg' }
        alt="Paella dish"
      />
        <Rating name="read-only" value={2} readOnly sx={{m:2}}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {itemJson?.des}
        </Typography>
      </CardContent>
      <Typography sx={{pl:2,pb:1}}>Rs : {itemJson?.amount}.00 (LKR)</Typography>
    </Card>
  );
}