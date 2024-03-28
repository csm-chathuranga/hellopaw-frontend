import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';


export default function RecipeReviewCard({img,item}) {

  return (
    <Card sx={{ mt:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={item?.created_at || ''}
      />
      <CardMedia  component="img"  height="500"  image={img}   alt="Paella dish"/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description || ''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{fontSize:'20px',color:'red'}}/>
          <Typography sx={{ml:2}}>100</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{fontSize:'20px'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <SpeakerNotesIcon sx={{fontSize:'20px'}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}