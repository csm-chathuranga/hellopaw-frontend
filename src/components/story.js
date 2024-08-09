import { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid, Typography, Skeleton } from '@mui/material';
import { getStory } from "../services/newSection";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}`,
  };
}

export default function CustomImageList({ isLoading }) {
  const [rows, setRows] = useState([]);

  const getPets = async () => {
    try {
      let res = await getStory();
      setRows(res.body); // Assuming res.body contains an array of items
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <Grid display={"flex"} gap={1}>
      {isLoading || rows.length === 0 ? (
        Array.from(new Array(3)).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={400}
            height={250}
            sx={{ borderRadius: '10px' }}
          />
        ))
      ) : (
        rows.map((item) => (
          <ImageListItem key={item.img} cols={2} rows={1} sx={{ height: '500px', borderRadius: '100px' }}>
            <img {...srcset(item.image_path, 200, 700, 1, 2)} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={<Typography>{item.title}</Typography>}
              subtitle={<Typography variant="body2">{item.author}</Typography>}
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
