import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid } from '@mui/material';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <Grid display={"flex"} gap={1}>

      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows} sx={{height:'400px',borderRadius:'10px'}}>
            <img {...srcset(item.img, 200, 400, rows, cols)} alt={item.title} loading="lazy" />
            <ImageListItemBar  sx={{  background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }} title={item.title} position="top"  actionIcon={
                <IconButton  sx={{ color: 'white' }} aria-label={`star ${item.title}`} >
                  <StarBorderIcon />
                </IconButton>
              }  actionPosition="left" />
          </ImageListItem>
        );
      })}
      </Grid>
  );
}
    // <ImageList sx={{
    //     width: '100%',
    //     height: 450,
    //     transform: 'translateZ(0)',
    //   }} rowHeight={400} gap={1}  >
        
const itemData = [
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/dmKl6aARvIcs5x29Rm-nhQ/348s.jpg',
    title: 'csm',
    author: '@tjdragotta',
  },
  {
    img: 'https://static.wixstatic.com/media/11062b_f35014e9aefc42cb985ae388beacaad6~mv2_d_1920_1920_s_2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cute%20Dog.jpg',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtITK4Po65n4w3xPf5sN9xLtTBCNNwWlc80w&usqp=CAU',
    title: 'deshan',
    author: '@silverdalex',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwcF7BpsjeIy6oQGZcMJSsu7Fd-RR6JtQUg&usqp=CAU',
    title: 'Retdd',
    author: '@shelleypauls',
  },
//   {
//     img: 'https://thepet.community/wp-content/uploads/2020/05/homestead_boarding.png',
//     title: 'Uysee',
//     author: '@tjdragotta',
//   },
];
