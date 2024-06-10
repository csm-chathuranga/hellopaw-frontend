import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid, Typography, Skeleton } from '@mui/material';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList({ isLoading }) {
  return (
    <Grid display={"flex"} gap={1}>
      {isLoading ? (
        itemData.map((item, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={400}
            height={250}
            sx={{ borderRadius: '10px' }}
          />
        ))
      ) : (
        itemData.map((item) => (
          <ImageListItem key={item.img} cols={2} rows={1} sx={{ height: '500px', borderRadius: '100px' }}>
            <img {...srcset(item.img, 200, 700, 1, 2)} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={<Typography>Full description here</Typography>}
              position="bottom"
              actionIcon={
                <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))
      )}
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/16/1/shutterstock_1862856634.jpg.rend.hgtvcom.791.527.suffix/1655430860853.jpeg',
    title: 'Sumesha',
    author: '@tjdragotta',
  },
  {
    img: 'https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg',
    title: 'Gayan',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Ruwanthika',
    author: '@silverdalex',
  },
];
