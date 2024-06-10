// File path: src/components/FixedBottomNavigation.jsx

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography, Skeleton } from '@mui/material';
import { IMG_URL } from '../utils/constant';

export default function FixedBottomNavigation({ data, isLoading }) {
  const navigate = useNavigate();
  const ref = React.useRef(null);

  const handleItemClick = (id) => {
    navigate(`/whatsNew/${id}`);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Box sx={{ pb: 7, position: 'fixed' }} ref={ref}>
      <CssBaseline />
      <Card sx={{ mt: 2, borderRadius: '10px', width: '300px' }}>
        <Typography sx={{ fontSize: '18px', p: 2 }}>
          What's news
        </Typography>
        <List sx={{ opacity: 0.8 }}>
          {isLoading ? (
            Array.from(new Array(5)).map((_, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Skeleton variant="text" width="80%" />}
                  secondary={<Skeleton variant="text" width="60%" />}
                />
              </ListItem>
            ))
          ) : (
            data?.map((item, index) => (
              <ListItem button key={index + item.description} onClick={() => handleItemClick(item.id)}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={IMG_URL + item?.image_path || ''} />
                </ListItemAvatar>
                <ListItemText
                  primary={item?.title || ''}
                  secondary={truncateText(item?.description || '', 20)}
                  sx={{ fontSize: '10px' }}
                />
              </ListItem>
            ))
          )}
        </List>
      </Card>
    </Box>
  );
}
